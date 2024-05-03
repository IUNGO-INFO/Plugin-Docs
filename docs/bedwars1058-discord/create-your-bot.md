---
sidebar_position: 1
---

# Create Your Bot

:::danger IMPORTANT

This section is very important

:::  
## Step 1: Create a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in with your Discord account.

2. Click on the "New Application" button and give your application a name. This name will be your bot's name, so choose something related to BedWars1058, like **BedWars Bot**.

![New Application](https://cdn.iungo.tech/u/c28d4981-206b-4430-8bd0-4102d01489dc.png)

3. Navigate to the **Bot** section on the left-hand side menu.

![Bot Section](https://cdn.iungo.tech/u/771260ca-24d9-4085-9c8e-dea358be7251.png)

## Step 2: Enable Privileged Gateway Intents

In order for your bot to work effectively with BedWars1058, you need to enable the following Privileged Gateway Intents: **PRESENCE INTENT**, **SERVER MEMBERS INTENT**, and **MESSAGE CONTENT INTENT**.

1. Enable **PRESENCE INTENT**:
   - Go to the **Bot** section in the Discord Developer Portal.
   - Toggle ON the **Presence Intent** option.

2. Enable **SERVER MEMBERS INTENT**:
   - In the same section, toggle ON the **Server Members Intent** option.

3. Enable **MESSAGE CONTENT INTENT**:
   - In the same section, toggle ON the **Message Content Intent** option.

   ![Privileged Gateway Intents](https://cdn.iungo.tech/u/1f3b635b-c9a9-47d6-b543-43d22f5f4c16.png)

## Step 3: Add the Bot to Your Discord Server

1. Go back to the **General Information** tab in the Discord Developer Portal and copy your bot's Application ID. You'll need this to generate the invite link.

2. Generate an Invite Link:
   - Replace `YOUR_CLIENT_ID` in the following URL with your bot's Client ID: https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=2146958847

- Open this link in your web browser, choose your desired server, and grant the necessary permissions.

## Step 4: Retrieve the Bot Token

1. While still on the **Bot** section of the Discord Developer Portal, under the **Token** subsection, click on the **Copy** or **Reset** button to copy your bot's token. Keep this token safe and never share it publicly!

Congratulations! 🎉 You've now created a Discord bot and enabled the necessary Privileged Gateway Intents for the BedWars1058 Discord Addon. In the next steps of your guide, you can proceed to integrate the bot with your Minecraft server. 😄
