import BotCard from "./BotCard.js";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  
  const armyItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={() => removeBot(bot.id)}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <strong style={{ color: "grey" }}> Your Bot Army</strong>
          {armyItem}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
