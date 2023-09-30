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
