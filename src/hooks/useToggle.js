const { useState, useCallback } = require("react")

const useToggle = (initToggle = false) => {
    const [display, setDisplay] = useState(initToggle)

    const toggle = useCallback(() => {
        setToggle(false)
    }, [])

    const toggleDisplay = useCallback(() => {
        setToggle(false)
    }, [])

    return [toggle, toggleDisplay, toggleHidden]
}