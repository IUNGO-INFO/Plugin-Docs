---
sidebar_position: 1
---

# Setup Plugin

# NoteSync Plugin Documentation

This documentation provides detailed instructions on how to set up and configure the NoteSync plugin for Minecraft and Discord. The plugin enables seamless music playback directly from Minecraft to your Discord channels.

## Prerequisites

Before proceeding with the setup, make sure you have the following:

1. A Discord account with administrative access to the Discord server where you want to install the NoteSync plugin.

## Configuration

To set up the NoteSync plugin, follow these steps:

### Step 1: Configure the Plugin

Open the `config.yml` file for the NoteSync plugin and add the following details:

```yaml
discord-token: xxxxxxxxxxxxxxx # Create a new Discord bot https://discord.com/developers/applications/
guildID: 'xxxxxxxxxxxxxxx' # Your server ID 
musicChannelID: 'xxxxxxxxxxxxxxx' The TEXT CHANNEL id where music messages should be sent inside the discord server.
getUpdateCheck: true # Sould we check for updates?
owner_id: '0000000000' # Your Discord ID (example: 456062221710131210)
bot_embed_colour: 43b581
bot_embed_error_colour: FF9494
statusType: ONLINE # ACCEPTED TYPES = IDLE, OFFLINE, DND and ONLINE
statusTexts:
- First status text
- Another status text
- Yet another status text
statusUpdate: 5
```

Replace "xxxxxxxxxxxxxxx" with your respective Discord Token, GuildID and Music Channel ID.

### Step 2: Save and Apply Changes

1. Save the `config.yml` file with the applied changes.

## Usage

Once the NoteSync plugin is configured, you can use various commands within your Discord server to control the music playback from Minecraft.

For a list of available commands and their usage, use the `/music help` command or continue reading for detailed documentation.

Congratulations! You have successfully set up the NoteSync plugin for Minecraft and Discord. Now you can enjoy seamless music playback directly from Minecraft to your Discord channels. Should you have any questions or need further assistance, feel free to visit the [IUNGO Plugin support server ](https://discord.gg/893Fk6rKac) or refer to the provided documentation.

Happy listening! 🎵🎶
