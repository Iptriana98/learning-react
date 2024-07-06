describe('demo', () => {
    test('message should be trimmed', () => {
        // Arrange
        const message = 'Hello, World!';

        // Act
        const result = message.trim();

        // Assert
        expect(message).toBe(result); // Output: Hello, World!
    });
})