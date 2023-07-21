---
sidebar_position: 3
---

# Custom Commands

The `customCommands.yml` file allows you to create custom commands for your Discord bot, complete with customizable embedded messages. Below is the structure of the file and an explanation of each option:

```yml title="customCommands.yml"
prefix: "!"
commands:
  - name: rules
    description: Custom Rules Command
    embed:
      title: Rules
      description: Please follow the rules
      color: 16711680
      fields:
        - name: "[1]"
          value: No bad words :(
          inline: true
        - name: "[2]"
          value: No cheating
          inline: true
        - name: "[3]"
          value: No fun!
          inline: true
  - name: custom2
    description: Custom Command 2
    embed:
      title: Example
      description: Example of using placeholders %bw1058_player_level%
      color: 65280
      fields:
        - name: "Allowed Flight?"
          value: "%player_allow_flight%"
          inline: true
        - name: "Level"
          value: "%bw1058_player_level%"
          inline: true
        - name: "Ping"
          value: "%player_ping%"
          inline: true

```

### Config Breakdown

### prefix

The `prefix` option is defined as the character that should be used for the bot to understand a command is being used. For example, if the prefix is set to `"!"`, the bot will recognize commands starting with `"!"`.

### commands

This section allows you to define custom commands for your bot. Each command is defined as a separate item in the list. You can create multiple custom commands by adding more items to the list.

- `name:`

  The `name` option is the name of the command, for example, `"rules"`. When a user sends the command with the specified prefix (e.g., "!rules"), the bot will execute the corresponding command.

- `description:`

  The `description` option provides a brief description of the custom command.

- `embed:`

  The `embed` section is where you can customize the appearance of the bot's response using an embedded message.

  - `title:`

    The `title` option will be the title of the embedded message.

  - `description:`

    The `description` option will be the description text shown on the embedded message.

  - `color:`

    The `color` option sets the color of the embedded message. The color is represented in hexadecimal format.

  - `fields:`

    The `fields` array allows you to add as many fields as defined in the config. Each field has a name, value, and an optional `inline` property. The `inline` property determines whether the field should be displayed inline with other fields or on a new line.

In the example `customCommands.yml`, there are two custom commands: "rules" and "custom2". Each command is followed by its respective embedded message settings.

- The "rules" command displays rules in an embedded message with a red color and three fields.

- The "custom2" command provides an example of using PlaceholderAPI placeholders in the embedded message. However, the user must be linked to Minecraft using the `/link` command on Discord for this feature to work.

You can add more custom commands following the same structure. Save the `customCommands.yml` file and restart your server. Your Discord bot should now be able to recognize and execute the custom commands according to the configurations provided.

