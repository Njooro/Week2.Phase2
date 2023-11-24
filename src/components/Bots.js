import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [bots, setBots] = useState([]);

  //fetch data from the server
  function fetchData() {
    return fetch(`https://my-json-server.typicode.com/Njooro/Week2.Phase2/bots`)
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  //add bot to army when the bot is clicked

  const addBot =(bot) => {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }
//remove bot
  const removeBot =(bot) => {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }
//delete bot
  const deleteBot = (bot) => {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots((bots) => deletedBot);
  }
  return (
    <div>
      <YourBotArmy />
      <BotCollection />
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