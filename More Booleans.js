class HelloWorld {
    getInfo() {
      return {
        id: 'helloworld',
        name: 'More Booleans',
        blocks: [
          {
            opcode: 'true',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
          opcode: 'false',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          },
          {
          opcode: 'custom',
            blockType: Scratch.BlockType.REPORTER,
            text: ''
            arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
            }

          }
        ]
      };
    }

    true() {
      return true;
    }
    false() {
        return false;
      }
  }

  Scratch.extensions.register(new HelloWorld());
