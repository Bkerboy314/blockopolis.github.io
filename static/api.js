// THE SNAIL IDE API EXTENSION
// MADE BY DUMO178 (gh: thepython555)

(function (Scratch) {
    "use strict";
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error("This Extension must run unsandboxed");
    }
  
    const icon =
      "data:image/png;base64,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";
  
    class snailapi {
      getInfo() {
        return {
          id: "snailapi",
          name: "Snail IDE",
          menuIconURI: icon,
          color1: "#855cd6",
          color2: "#7450ba",
          blocks: [
            {
              opcode: "usergrab",
              blockType: Scratch.BlockType.REPORTER,
              text: "grab follower count of user [WHO]",
              arguments: {
                WHO: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "Mr_rudy",
                },
              },
            },
            {
              opcode: "idtoname",
              blockType: Scratch.BlockType.REPORTER,
              text: Scratch.translate("name of project id [WHO]"),
              arguments: {
                WHO: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "6793751705525", //we do a bit of selfpromo
                },
              },
            },
            {
              opcode: "idtoowner",
              blockType: Scratch.BlockType.REPORTER,
              text: Scratch.translate("creator of project id [WHO]"),
              arguments: {
                WHO: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "6793751705525", //
                },
              },
            },

          ],
          
        };
      }
      async usergrab(args) {
        try {
          const response = await Scratch.fetch(
            "https://projects.snail-ide.com/api/users/getFollowerCount?username=" + encodeURIComponent(args.WHO)
          );
          return response.text(); //pretty straightforward isnt it
        } catch (error) {
          return "";
        }
      }
      async idtoname(args) {
        try {
          const response = await Scratch.fetch(
            "https://projects.snail-ide.com/api/pmWrapper/getProject?id=" + args.WHO
          );
          const jsonData = await response.json();
          return jsonData.name;
        } catch (error) {
          return "";
        }
      }
      async idtoowner(args) {
        try {
          const response = await Scratch.fetch(
            "https://projects.snail-ide.com/api/pmWrapper/getProject?id=" + args.WHO
          );
          const jsonData = await response.json();
          return jsonData.author.username;
        } catch (error) {
          return "";
        }
      }
    }
    Scratch.extensions.register(new snailapi());
  })(Scratch);
