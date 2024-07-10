document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const commandInput = document.getElementById('commandInput');
    const prompt = 'CGS_Terminal>';
    
    terminal.value = `${prompt}`;
    commandInput.value = '';
    commandInput.focus();

    const commands = {
        clear: () => terminal.value = prompt,
        hello: () => appendToTerminal('Hello, world!'),
        // Add more commands here
    };

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = commandInput.value.trim();
            processCommand(command);
            commandInput.value = '';
        } else if (event.key === 'Backspace') {
            if (commandInput.value.length === 0) {
                event.preventDefault();
            }
        }
    });

    function processCommand(command) {
        appendToTerminal(command);
        if (commands[command]) {
            appendToTerminal(commands[command]());
        } else {
            appendToTerminal(`Command not found: ${command}`);
        }
        appendToTerminal('');
    }

    function appendToTerminal(text) {
        terminal.value += `\n${text}`;
        terminal.scrollTop = terminal.scrollHeight;
    }
});
