---
sidebar_position: 2
---

# Setup Plugin

## Obtaining required values 

To integrate your Discord bot with Minecraft, you need to configure the `config.yml` file. Follow these steps to set up your bot and customize its behavior:

1. **Get Your Discord Bot Token:**

   - Use the new token you got from [Discord Developer Portal](https://discord.com/developers/applications) and add it into `discord-token:`.

2. **Find Your Discord Server (Guild) ID:**

   - Enable Developer Mode in Discord: Go to **User Settings** > **Advanced** and toggle on **"Developer Mode"**

   ![Developer Mode](https://cdn.iungo.tech/u/8ef3b17c-7789-4efe-b0d3-734f4de23953.png)

   - Right-click on the server's name and select "**Copy Server ID**"

   ![Copy Server ID](https://cdn.iungo.tech/u/9fd7e2ea-8d68-4b86-90e1-04bcbd5839a6.png)

3. **Configure the `config.yml` File:**

   Below is the structure of the `config.yml` file:

```yml title="config.yml"
discord-token: xxxxxxxxxxxxxx  # This is where we put the newly made discord bot token
guildID: 'xxxxxxxxxxxxxx'  # This is the ID of the discord server (help explain how to get that)
gameEndEvent: true  # This will determine if the game end event should be shown inside the server! Good for keeping track of showing off when players win games!
gameEndChannelID: 'xxxxxxxxxxxxxx'  # If gameEndEvent is enabled, this is the channel the message will be sent to
playerKillEvent: true  # Similar to game end, this will show all player kills inside discord
playerKillChannelID: 'xxxxxxxxxxxxxx'  # and this is the channel it will be sent too!
getUpdateCheck: true  # Will show a message to OP and users with permission "bedwars1058-discord.admin"
owner_id: 'xxxxxxxxxxxxxx'  # This is the user ID of the server or bot owner
bot_embed_colour: 2f3136  # Colour of most of the embed discord messages
statusTexts:  # Text on this list will loop as the discord bots status messages!
  - First status text
  - Another status text
  - Yet another status text
statusType: IDLE  # Changes the bots display type! ACCEPTED TYPES = IDLE, OFFLINE, DND and ONLINE
statusUpdate: 5  # How often in seconds the status text will change
```

## Config Breakdown

**Replace the `xxxxxxxxxxxxxxx` placeholders with the appropriate values obtained in steps 1 and 2.**

1. **Set Game End Event:**
   To enable the game end event in your Discord server, set `gameEndEvent` to `true`.

2. **Choose Game End Channel:**
   If `gameEndEvent` is enabled, replace `xxxxxxxxxxxxxx` in `gameEndChannelID` with the channel ID where the message will be sent.

3. **Set Player Kill Event:**
   To enable the player kill event in your Discord server, set `playerKillEvent` to `true`.

4. **Choose Player Kill Channel:**
   If `playerKillEvent` is enabled, replace `xxxxxxxxxxxxxx` in `playerKillChannelID` with the channel ID where the player kill messages will be sent.

5. **Update Check Message:**
   To show an update check message to server operators and users with permission "bedwars1058-discord.admin," set `getUpdateCheck` to `true`.

6. **Bot Owner ID:**
   Replace `xxxxxxxxxxxxxx` in `owner_id` with the user ID of the server or bot owner.

7. **Bot Embed Color:**
   Set `bot_embed_colour` to the desired color in hexadecimal format, such as `2f3136` for dark gray.

8. **Bot Status Texts:**
   Customize the status texts in the `statusTexts` list. These texts will loop as the bot's status messages.

9. **Bot Status Type:**
   Set `statusType` to one of the accepted types: `IDLE`, `OFFLINE`, `DND` (Do Not Disturb), or `ONLINE`.

10. **Bot Status Update Interval:**
    Set `statusUpdate` to the desired interval (in seconds) for changing the status text.

Save the `config.yml` file and restart your server. With these configurations, your Discord bot should now be ready to interact with your Minecraft server and provide the specified functionalities.
