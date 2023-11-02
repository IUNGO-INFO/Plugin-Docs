---
sidebar_position: 1
---

# Setup Plugin

# IUNGO Music Integration Plugin Documentation

This documentation provides detailed instructions on how to set up and configure the IUNGO Music Integration plugin for Minecraft and Discord. The plugin enables seamless music playback directly from Minecraft to your Discord channels.

## Prerequisites

Before proceeding with the setup, make sure you have the following:

1. A Discord account with administrative access to the Discord server where you want to install the IUNGO Music Integration plugin.

2. IUNGO Music Bot installed on your Discord server:
   - You can add IUNGO Music Bot to your server by visiting the [IUNGO Bot website](https://iungobot.net/invite) or using the `/invite` command inside Discord.

3. Access to manage the Discord server to visit the `/dashboard` page.

## Configuration

To set up the IUNGO Music Integration plugin, follow these steps:

### Step 1: Obtain the API Token

1. Access the IUNGO Bot Dashboard for your selected Discord server at `https://iungobot.net/dashboard/<guildID>`, where `<guildID>` is your Discord Server ID.

2. Inside the dashboard, you will find the **API KEY** on the left-hand side of the sidebar. Copy the provided API Token.

### Step 2: Configure the Plugin

Open the `config.yml` file for the IUNGO Music Integration plugin and add the following details:

```yaml
locale: default
GuildID: "xxxxxxxxxxxxxxx" # Replace with your Discord Server ID
apiToken: "xxxxxxxxxxxxxxx" # Replace with the obtained API Token
endpoint: "api.iungobot.net" # Do not modify this value (used for debug and custom instances)

# Should we check for updates?
Update-Notifier-Enabled: true
```

Replace "xxxxxxxxxxxxxxx" with your respective GuildID and API Token.

### Step 3: Save and Apply Changes

1. Save the `config.yml` file with the applied changes.

**Please note:** Do not modify the `endpoint` value unless instructed by an IUNGO Developer or staff member.

## Usage

Once the IUNGO Music Integration plugin is configured, you can use various commands within your Discord server to control the music playback from Minecraft.

For a list of available commands and their usage, use the `/iungo help` command or continue reading for detailed documentation.

Congratulations! You have successfully set up the IUNGO Music Integration plugin for Minecraft and Discord. Now you can enjoy seamless music playback directly from Minecraft to your Discord channels. Should you have any questions or need further assistance, feel free to visit the IUNGO Bot support [Discord](https://discord.gg/893Fk6rKac) or refer to the provided documentation.

Happy listening! 🎵🎶
