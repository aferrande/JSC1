// tentar fazer um stat check pra ver quem ataca primeiro, e remover a opção de as setinhas dos stats passar os limites de stats total
const fighterOne = "fighterOne";

const fighterTwo = "fighterTwo";

const oopClassList = {
  attack: "attack",
  fighterHit: "fighterHit",
  miss: "miss",
};

const restrictValue = (id) => {
  const fields = ["fOneAtk", "fOneDef", "fOneSpd"].includes(id)
    ? ["fOneAtk", "fOneDef", "fOneSpd"]
    : ["fTwoAtk", "fTwoDef", "fTwoSpd"];
  const max = 100;
  const a = parseFloat(getById(fields[0]).value) || 0;
  const b = parseFloat(getById(fields[1]).value) || 0;
  const c = parseFloat(getById(fields[2]).value) || 0;
  if (a + b + c > max || a < 0) {
    getById(id).value = 0;
  }
};

getFightStats = (PlayerOne) => {
  const [atk, def, spd] = PlayerOne
    ? ["fOneAtk", "fOneDef", "fOneSpd"]
    : ["fTwoAtk", "fTwoDef", "fTwoSpd"];
  return {
    atk: parseInt(getById(atk).value) || 0,
    def: parseInt(getById(def).value) || 0,
    spd: parseInt(getById(spd).value) || 0,
  };
};

const getSpriteDelay = (i, spriteImages) => {
  const shift = (800 / spriteImages) * (i + 1);
  return shift;
};

const startBattle = () => {
  const fighterOneStats = getFightStats(true);
  const fighterTwoStats = getFightStats(false);
  const fighterOne = new Fighter(
    "fighterOne",
    "fighterOneHp",
    fighterOneStats.atk,
    fighterOneStats.def,
    fighterOneStats.spd,
    "Klebertz"
  );
  const fighterTwo = new Fighter(
    "fighterTwo",
    "fighterTwoHp",
    fighterTwoStats.atk,
    fighterTwoStats.def,
    fighterTwoStats.spd,
    "Gumers"
  );
  const battle = new BattleField(fighterOne, fighterTwo);

  // TESTE DE VELOCIDADE
  // let goFirst = fighterOneStats.spd > fighterTwoStats.spd ? (Hit = fighterOne) && (Def = fighterTwo) : (Hit = fighterTwo) && (Def = fighterOne)
  // return goFirst, battle.fightStart(Hit, Def)

  // if(fighterOneStats.spd > fighterTwoStats.spd) {let Hit = fighterOne; let Def = fighterTwo}
  // else {let Hit = fighterTwo; let Def = fighterOne}

  battle.fightStart(fighterOne, fighterTwo);
};

class Fighter {
  hp = 100;
  spriteWidth = 5.82;
  spriteImages = 17;

  constructor(id, hpId, atk, def, spd, name) {
    this.id = id;
    this.hpId = hpId;
    this.atk = atk;
    this.def = def;
    this.spd = spd;
    this.name = name;
  }

  TransitionFighter(movement) {
    getById(this.id).style.backgroundPosition = `${movement}%`;
  }
  AtkPosition() {
    getById(this.id).classList.add(oopClassList.attack);
  }
  GotHit() {
    getById(this.id === fighterOne ? fighterTwo : fighterOne).classList.add(
      oopClassList.fighterHit
    );
  }
  Dodge() {
    getById(this.id === fighterOne ? fighterTwo : fighterOne).classList.add(
      oopClassList.miss
    );
  }
  ResetPosition() {
    setTimeout(() => {
      getById(this.id).classList.remove(oopClassList.attack);
      getById(
        this.id === fighterOne ? fighterTwo : fighterOne
      ).classList.remove(oopClassList.fighterHit);
      getById(
        this.id === fighterOne ? fighterTwo : fighterOne
      ).classList.remove(oopClassList.miss);
    }, 1000);
  }
  AnimateHit() {
    this.AtkPosition();
    let movement = this.spriteWidth;
    for (let i = 0; i < this.spriteImages; i++) {
      setTimeout(() => {
        this.TransitionFighter(movement);
        movement += this.spriteWidth;
      }, getSpriteDelay(i, this.spriteImages));
    }
    setTimeout(() => {
      this.GotHit();
    }, 300);
  }
  AnimateMiss() {
    this.AtkPosition();
    let movement = this.spriteWidth;
    for (let i = 0; i < this.spriteImages; i++) {
      setTimeout(() => {
        this.TransitionFighter(movement);
        movement += this.spriteWidth;
      }, getSpriteDelay(i, this.spriteImages));
    }
    setTimeout(() => {
      this.Dodge();
    }, 300);
  }
}

class BattleField {
  constructor(fighterOne, fighterTwo) {
    this.fighterOne = fighterOne;
    this.fighterTwo = fighterTwo;
  }
  HitOrMiss(DefFighter) {
    return Math.random() > DefFighter.spd / 100;
  }
  HPLoss(AtkFighter, DefFighter) {
    const dmgTaken = AtkFighter.atk - DefFighter.def;
    if (dmgTaken > 0) DefFighter.hp -= dmgTaken;
    else DefFighter.hp -= 1;
    setTimeout(() => {
      getById(DefFighter.hpId).innerText = DefFighter.hp;
    }, 300);
  }
  fightStart(AtkFighter, DefFighter) {
    let complete = false;
    const HitOrMiss = this.HitOrMiss(DefFighter);
    if (HitOrMiss) {
      AtkFighter.AnimateHit();
      this.HPLoss(AtkFighter, DefFighter);
      if (DefFighter.hp <= 0) {
        this.resetGame(AtkFighter, DefFighter);
        complete = true;
      }
    } else {
      AtkFighter.AnimateMiss();
    }
    AtkFighter.ResetPosition();

    if (!complete) {
      setTimeout(() => {
        this.fightStart(DefFighter, AtkFighter);
      }, 1500);
    }
  }
  resetGame(AtkFighter, DefFighter) {
    setTimeout(() => {
      AtkFighter.hp = 100;
      getById(AtkFighter.hpId).innerText = AtkFighter.hp;
      DefFighter.hp = 100;
      getById(DefFighter.hpId).innerText = DefFighter.hp;
    }, 1200);
    setTimeout(() => {
      alert(`The winning player is ${AtkFighter.name}`);
    }, 1000);
  }
}
