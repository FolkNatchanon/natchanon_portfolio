"use client"

import React, { useState, useEffect } from "react"

interface DynamicTextProps {
	texts: string[]
	typingSpeed?: number // ms ต่อ 1 ตัวอักษร
	pauseTime?: number // ms หลังพิมพ์ครบ 1 ข้อความ
	cursorBlinkSpeed?: number
	variant?: "primary" | "secondary"
	cursorVariant?: "primary" | "secondary"
	loop?: boolean // พิมพ์จบข้อความสุดท้ายแล้ววนซ้ำไหม (default: false)
}

const DynamicText: React.FC<DynamicTextProps> = ({
	texts,
	typingSpeed = 100,
	pauseTime = 2000,
	cursorBlinkSpeed = 500,
	variant = "primary",
	cursorVariant = "primary",
	loop = false,
}) => {
	const [currentText, setCurrentText] = useState("")
	const [textIndex, setTextIndex] = useState(0)
	const [showCursor, setShowCursor] = useState(true)

	// พิมพ์อย่างเดียว ไม่ลบ
	useEffect(() => {
		if (texts.length === 0) return

		const fullText = texts[textIndex] ?? ""

		// ถ้าพิมพ์ครบแล้ว: รอ pause แล้วไปข้อความถัดไป (ถ้ามี/ถ้า loop)
		if (currentText === fullText) {
			const doneAll = textIndex === texts.length - 1
			if (doneAll && !loop) return // จบการทำงาน ไม่วน

			const t = setTimeout(() => {
				const nextIndex = doneAll ? 0 : textIndex + 1
				setTextIndex(nextIndex)
				setCurrentText("") // รีเซ็ตทันที (ไม่ลบทีละตัว)
			}, pauseTime)
			return () => clearTimeout(t)
		}

		// ยังพิมพ์ไม่ครบ: เติมตัวถัดไป
		const typingTimer = setTimeout(() => {
			setCurrentText(fullText.slice(0, currentText.length + 1))
		}, typingSpeed)

		return () => clearTimeout(typingTimer)
	}, [texts, textIndex, currentText, typingSpeed, pauseTime, loop])

	// กระพริบเคอร์เซอร์
	useEffect(() => {
		const cursorBlinkInterval = setInterval(() => {
			setShowCursor((prev) => !prev)
		}, cursorBlinkSpeed)
		return () => clearInterval(cursorBlinkInterval)
	}, [cursorBlinkSpeed])

	const variantClasses: Record<string, string> = {
		primary:
			"font-primary text-[16px] text-accent-Black font-semibold xl:text-[20px]",
		secondary:
			"font-primary text-[16px] text-accent-White font-semibold xl:text-[20px]",
	}

	const cursorVariantClasses: Record<string, string> = {
		primary: "text-accent-Black font-cursor font-bold",
		secondary: "text-accent-White font-cursor font-bold",
	}

	return (
		<span className={`transition-all duration-300 ${variantClasses[variant]}`}>
			{currentText}
			<span
				className={`cursor ${cursorVariantClasses[cursorVariant]}`}
				style={{ visibility: showCursor ? "visible" : "hidden" }}
			>
				|
			</span>
		</span>
	)
}

export default DynamicText
