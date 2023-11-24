import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

  // Fetch data from the server
  function fetchData() {
    return fetch(`https://vercel1-smoky.vercel.app/bots`)
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Add bot to army when the bot is clicked
  const addBot = (bot) => {
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
    );
  };

  // Remove bot
  const removeBot = (bot) => {
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: false } : b))
    );
  };

  // Delete bot
  const deleteBot = (bot) => {
    const updatedBots = bots.filter((b) => b.id !== bot.id);
    setBots(updatedBots);
  };

  return (
    <div>
      <YourBotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotCollection bots={bots} addBot={addBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;
