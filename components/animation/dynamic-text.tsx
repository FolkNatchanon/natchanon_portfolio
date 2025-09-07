"use client"

import React, { useState, useEffect } from "react"

interface DynamicTextProps {
	texts: string[] // Array of texts to cycle through
	typingSpeed?: number // Milliseconds per character
	pauseTime?: number // Milliseconds between texts
	cursorBlinkSpeed?: number // Milliseconds for cursor blinking
	variant?: "primary" | "secondary" // Variants for text style
	cursorVariant?: "primary" | "secondary" // Variants for cursor style
}

const DynamicText: React.FC<DynamicTextProps> = ({
	texts,
	typingSpeed = 100,
	pauseTime = 2000,
	cursorBlinkSpeed = 500,
	variant = "primary", // Default variant for text
	cursorVariant = "primary", // Default variant for cursor
}) => {
	const [currentText, setCurrentText] = useState("")
	const [textIndex, setTextIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [showCursor, setShowCursor] = useState(true)

	// Typing effect
	useEffect(() => {
		const handleTyping = () => {
			const fullText = texts[textIndex]
			const nextText = isDeleting
				? fullText.slice(0, currentText.length - 1)
				: fullText.slice(0, currentText.length + 1)

			setCurrentText(nextText)

			if (!isDeleting && nextText === fullText) {
				setTimeout(() => setIsDeleting(true), pauseTime)
			} else if (isDeleting && nextText === "") {
				setIsDeleting(false)
				setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
			}
		}

		const typingInterval = setTimeout(
			handleTyping,
			isDeleting ? typingSpeed / 2 : typingSpeed, // Faster deleting
		)

		return () => clearTimeout(typingInterval)
	}, [currentText, isDeleting, textIndex, texts, typingSpeed, pauseTime])

	// Cursor blinking effect
	useEffect(() => {
		const cursorBlinkInterval = setInterval(() => {
			setShowCursor((prev) => !prev)
		}, cursorBlinkSpeed)

		return () => clearInterval(cursorBlinkInterval)
	}, [cursorBlinkSpeed])

	// Variant class mapping
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
