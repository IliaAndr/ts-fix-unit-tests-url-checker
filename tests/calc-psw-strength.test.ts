import {calculatePasswordStrength} from "../src/calc-psw-strength";

describe('calculate password strength', () => {

    // === THROW ERROR ===
    test('should throw error for empty password', () => {
        expect(() => calculatePasswordStrength('')).toThrow('Password cannot be empty');
    })

    test('should throw error for password consists only of spaces', () => {
        expect(() => calculatePasswordStrength('   ')).toThrow('Password cannot be empty');
    })

    // === VERY WEAK ===
    test('Very Weak: short, digits, no variety', () => {
        expect(calculatePasswordStrength("111")).toBe("Very Weak");
    })

    test('Very Weak: short, lowercase letters, no variety', () => {
        expect(calculatePasswordStrength("abc")).toBe("Very Weak");
    })

    test('Very Weak: short, uppercase letters, no variety', () => {
        expect(calculatePasswordStrength("ABC")).toBe("Very Weak");
    })

    test('Very Weak: short, symbols, no variety', () => {
        expect(calculatePasswordStrength("@#&")).toBe("Very Weak");
    })

    test('Very Weak: short, lowercase & uppercase letters', () => {
        expect(calculatePasswordStrength("aB")).toBe("Very Weak");
    })

    test('Very Weak: short, lowercase letters & digits', () => {
        expect(calculatePasswordStrength("a1")).toBe("Very Weak");
    })

    test('Very Weak: short, lowercase letters & symbols', () => {
        expect(calculatePasswordStrength("a$")).toBe("Very Weak");
    })

    test('Very Weak: short, uppercase letters & digits', () => {
        expect(calculatePasswordStrength("A1")).toBe("Very Weak");
    })

    test('Very Weak: short, uppercase letters & symbols', () => {
        expect(calculatePasswordStrength("A$")).toBe("Very Weak");
    })

    test('Very Weak: short, symbols & digits', () => {
        expect(calculatePasswordStrength("$1")).toBe("Very Weak");
    })

    test('Very Weak: long, digits, no variety', () => {
        expect(calculatePasswordStrength("12345678901")).toBe("Very Weak");
    })

    test('Very Weak: long, lowercase letters, no variety', () => {
        expect(calculatePasswordStrength("abcdefghij")).toBe("Very Weak");
    })

    test('Very Weak: long, uppercase letters, no variety', () => {
        expect(calculatePasswordStrength("ABCDEFGHIJ")).toBe("Very Weak");
    })

    test('Very Weak: long, symbols, no variety', () => {
        expect(calculatePasswordStrength("!@#$%ˆ&*()=")).toBe("Very Weak");
    })

    // === WEAK ===
    test('Weak: 12 > length ≥ 8 lowercase & uppercase letters', () => {
        expect(calculatePasswordStrength("abcdABCD")).toBe("Weak");
    })

    test('Weak: 12 > length ≥ 8 lowercase letters & digits', () => {
        expect(calculatePasswordStrength("abcd1234")).toBe("Weak");
    })

    test('Weak: 12 > length ≥ 8 lowercase letters & symbols', () => {
        expect(calculatePasswordStrength("abcd$%ˆ&")).toBe("Weak");
    })

    test('Weak: 12 > length ≥ 8 uppercase letters & digits', () => {
        expect(calculatePasswordStrength("ABCD1234")).toBe("Weak");
    })

    test('Weak: 12 > length ≥ 8 uppercase letters & symbols', () => {
        expect(calculatePasswordStrength("ABCD$%ˆ&")).toBe("Weak");
    })

    test('Weak: 12 > length ≥ 8 symbols & digits', () => {
        expect(calculatePasswordStrength("!@#$1234")).toBe("Weak");
    })

    test('Weak: length < 8 uppercase, lowercase, digits', () => {
        expect(calculatePasswordStrength("ABab12")).toBe("Weak");
    })

    test('Weak: length < 8 uppercase, lowercase, symbols', () => {
        expect(calculatePasswordStrength("ABab!@")).toBe("Weak");
    })

    test('Weak: length < 8 uppercase, digits, symbols', () => {
        expect(calculatePasswordStrength("AB12!@")).toBe("Weak");
    })

    test('Weak: length < 8 lowercase, digits, symbols', () => {
        expect(calculatePasswordStrength("ab12!@")).toBe("Weak");
    })

    test('Weak: length ≥ 12 lowercase', () => {
        expect(calculatePasswordStrength("abcdefghijklmn")).toBe("Weak");
    })

    test('Weak: length ≥ 12 uppercase', () => {
        expect(calculatePasswordStrength("ABCDEFGHIJKLMN")).toBe("Weak");
    })

    test('Weak: length ≥ 12 digits', () => {
        expect(calculatePasswordStrength("12345678901234")).toBe("Weak");
    })

    test('Weak: length ≥ 12 symbols', () => {
        expect(calculatePasswordStrength("@#$@#$@#$@#$@#")).toBe("Weak");
    })

    // === Moderate ===
    test('Moderate: length < 8 and all types', () => {
        expect(calculatePasswordStrength("aB1@")).toBe("Moderate");
    })

    test('Moderate: 12 > length ≥ 8 lowercase, uppercase, digits', () => {
        expect(calculatePasswordStrength("abcABC123")).toBe("Moderate");
    })

    test('Moderate: 12 > length ≥ 8 lowercase, uppercase, symbols', () => {
        expect(calculatePasswordStrength("abcABC!@#")).toBe("Moderate");
    })

    test('Moderate: 12 > length ≥ 8 lowercase, digits, symbols', () => {
        expect(calculatePasswordStrength("abc123!@#")).toBe("Moderate");
    })

    test('Moderate: 12 > length ≥ 8 uppercase, digits, symbols', () => {
        expect(calculatePasswordStrength("ABC123!@#")).toBe("Moderate");
    })

    test('Moderate: length ≥ 12 lowercase, uppercase', () => {
        expect(calculatePasswordStrength("abcdefABCDEF")).toBe("Moderate");
    })

    test('Moderate: length ≥ 12 lowercase, digits', () => {
        expect(calculatePasswordStrength("abcdef123456")).toBe("Moderate");
    })

    test('Moderate: length ≥ 12 lowercase, symbols', () => {
        expect(calculatePasswordStrength("abcdef!@#$%ˆ")).toBe("Moderate");
    })

    test('Moderate: length ≥ 12 uppercase, digits', () => {
        expect(calculatePasswordStrength("ABCDEF123456")).toBe("Moderate");
    })

    test('Moderate: length ≥ 12 uppercase, symbols', () => {
        expect(calculatePasswordStrength("ABCDEF!@#$%ˆ")).toBe("Moderate");
    })

    test('Moderate: length ≥ 12 symbols, digits', () => {
        expect(calculatePasswordStrength("!@#$%ˆ123456")).toBe("Moderate");
    })

    // === STRONG ===

    test('Strong: 12 > length ≥ 8 + all types', () => {
        expect(calculatePasswordStrength("AAbb33$$")).toBe("Strong");
    })

    test('Strong: length ≥ 12 + lowercase, uppercase and digits', () => {
        expect(calculatePasswordStrength("AAAAbbbb3333")).toBe("Strong");
    })

    test('Strong: length ≥ 12 + lowercase, uppercase and symbols', () => {
        expect(calculatePasswordStrength("AAAAbbbb####")).toBe("Strong");
    })

    test('Strong: length ≥ 12 + lowercase, symbols and digits', () => {
        expect(calculatePasswordStrength("bbbb$$$$3333")).toBe("Strong");
    })

    test('Strong: length ≥ 12 + uppercase, symbols and digits', () => {
        expect(calculatePasswordStrength("AAAA@@@@3333")).toBe("Strong");
    })

// === trim() ===
    test('end spaces should be trimmed', () => {
        expect(calculatePasswordStrength('1234567 ')).toBe("Very Weak");
    })

    test('start spaces should be trimmed', () => {
        expect(calculatePasswordStrength(' 1234567')).toBe("Very Weak");
    })

    test('both: end and start spaces should be trimmed', () => {
        expect(calculatePasswordStrength(' 1234567 ')).toBe("Very Weak");
    })
})