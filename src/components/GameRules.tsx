
import React from "react";

const GameRules = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white rounded-lg shadow-xl">
      <h1 className="text-3xl text-center font-bold mb-8 text-yellow-400">《Общие правила игры》для Pixel Combats 2</h1>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">¤Оружия¤</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-green-300">Основное:</h3>
          <p className="text-gray-100">Ак-47; M4A; M24; Shotgun; MП5</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-green-300">Второстепенное:</h3>
          <p className="text-gray-100">Desert Eagle; Beretta</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-green-300">Ближний бой:</h3>
          <p className="text-gray-100">Fire Axe; Kitchen Knife; M9 Bayonet; Military Shovel</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-green-300">Разрешённые карты:</h3>
          <p className="text-gray-100">Dust2; Angar; zero</p>
        </div>
      </div>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">《🔰Дуэли на топ🔰》</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>1.0) арендовка запрещена</li>
          <li>1.1) эмулятор разрешён</li>
          <li>1.2) несколько перезаходов подряд(до 3) - АП</li>
          <li>1.3) софт запрещен</li>
          <li>1.4) пулемёт запрещен</li>
          <li>1.5) зритель разрешен только если двое дали согласие</li>
          <li>1.6) лож ап - ап</li>
          <li>1.7) ап за пинг не существует</li>
          <li>1.8) противник сидит в укрытии больше 30 секунд - ап</li>
          <li>1.9) умер, +1 очко противнику</li>
          <li>1.10) если зритель мешает то ап тому кто его позвал</li>
          <li>1.11) при создании комнаты название должно быть <span className="font-bold">{"{Дуэль на топ}"}</span></li>
        </ul>
      </div>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">《🔰Кв🔰》</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>2.0) хелпа разрешена</li>
          <li>2.1) эмулятор разрешен</li>
          <li>2.2) замена разрешена (заменить можно 1 игрока)</li>
          <li>2.3) Если вас заподозрили в читах и просят снять видео, вы обязаны его снять</li>
          <li>2.4) Помощь от забаненого клана запрещена</li>
          <li>2.5) при создании комнаты название должно быть <span className="font-bold">{"{Кв}"}</span></li>
        </ul>
      </div>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">《🔰Кв на уничтожение🔰》</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>3.0) хелпа запрещена</li>
          <li>3.1) эмулятор запрещён</li>
          <li>3.2) замена запрещена</li>
          <li>3.3) если игрок находится в клане меньше 7 дней то на кв он идти не может</li>
          <li>3.4) после уничтожение клана лидер не может создать клан нужно что-бы прошло 7 дней</li>
          <li>3.5) Игра на уничтожение разрешена, но по согласию двух кланов</li>
          <li>3.6) Передача побед другому клану запрещена</li>
          <li>3.7) если клан отказался больше 3-х раз - уничтожен</li>
          <li>3.8) при создании комнаты название должно быть <span className="font-bold">{"{Кв на уничтожение}"}</span></li>
        </ul>
      </div>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">《🔰Военное сражение🔰》</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>4.0) аренда запрещена</li>
          <li>4.1) хелпа в количестве 1 игрока на команду</li>
          <li>4.2) Эмулятор разрешен</li>
          <li>4.3) софт запрещен</li>
          <li>4.4) зрители запрещены(кроме некоторых аналитиков)</li>
          <li>4.5) играется до 3 побед</li>
          <li>4.6) проигравший клан обязан закрыться на 2 недели</li>
          <li>4.7) при создании комнаты название должно быть <span className="font-bold">{"{Военное сражение}"}</span></li>
        </ul>
      </div>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">《🔰игры турниров🔰》</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>3.4) организация турнира может сама решить по каким правилам будет играть</li>
          <li>3.5) организация турнира может выдать ап тому кто не играет или боится</li>
          <li>3.6) хелпа на турнирах запрещена</li>
          <li>3.7) если игрок ливнул с игры то противник проходит или организация турнира должна убрать его с записаных</li>
          <li>3.8) подкуп противника запрещен!</li>
          <li>3.9) использывание багов запрещено</li>
        </ul>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-xl mb-2">●По всем вопросам, спорным ситуациям и нарушениях писать сюда - <span className="text-blue-400">@Kot_vselenoy</span></p>
      </div>
      
      <div className="mb-8 bg-slate-700 p-4 rounded-lg">
        <div className="text-center">
          <p className="text-xl mb-2">┏━┅┅┄┄⟞【࿈】⟝┄┄┉┉━┓</p>
          <p className="my-1">ㅤАп - авто порожение</p>
          <p className="my-1">ㅤКв - клановая война</p>
          <p className="my-1">ㅤЛоу - мало хп</p>
          <p className="my-1">ㅤПинг - плохой интернет</p>
          <p className="my-1">ㅤХп - здоровье</p>
          <p className="text-xl mt-2">┗━┅┅┄┄⟞【࿈】⟝┄┄┉┉━┛</p>
        </div>
      </div>
      
      <div className="text-center mb-6">
        <p className="text-lg font-semibold mb-4">Сделано для всех аналитик!!!</p>
        
        <p className="mb-4">
          Правила брались у аналитик<br />
          <span className="text-blue-400">@analitikaSincl1t</span><br />
          <span className="text-blue-400">@Analytics_Kosharius</span>
        </p>
        
        <p className="mb-4">
          В создании участвовали<br />
          •Кошариус<br />
          •Зороо<br />
          •Наполеон
        </p>
        
        <p className="text-xl">───── ⋆⋅☆⋅⋆ ─────</p>
        <p className="text-lg mt-2">Спасибо за внимание!</p>
      </div>
    </div>
  );
};

export default GameRules;
