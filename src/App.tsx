import { useState } from 'react';
import styled from 'styled-components';
import MarbleBackground from './components/MarbleBackground';

function App() {
  return (
    <Wrapper>
      <MarbleBackground>
        <Icon />
        <Weapon>
          <Name rarity='legendary'>Thunderfury, Blessed Blade of the Windseeker</Name>
          <ItemLevel>Item Level 101</ItemLevel>
          <Binding>Binds when picked up</Binding>
          <>Unique</>
          <Type>
            <Slot>One-Hand</Slot> {/* {slot} */}
            Sword
          </Type>
          <DamageMeta>
            <Damage>17 - 30 Damage</Damage> {/* {min} - {max} Damage */}
            <Speed>Speed 2.60</Speed> {/* Speed {speed} */}
            (9 damage per second) {/* {dps} damage per second */}
          </DamageMeta>
          <Stats>
            <Stat>
              <>+3</>
              <StatName>Agility</StatName>
            </Stat>
            <Stat>
              <>+5</>
              <StatName>Stamina</StatName>
            </Stat>
            <Stat>
              <>+0</>
              <StatName>Fire Resistance</StatName>
            </Stat>
            <Stat>
              <>+1</>
              <StatName>Nature Resistance</StatName>
            </Stat>
          </Stats>
          <Durability>Durability 130 / 130</Durability>
          <Proc>
            Chance on hit: Blasts your enemy with lightning, dealing 4 Nature damage and then jumping to additional nearby enemies.  Each jump reduces that victim's Nature resistance by 0. Affects 5 targets. Your primary target is also consumed by a cyclone, slowing its attack speed by 20% for 12 sec.
          </Proc>
          <LevelRequirement>Requires Level 25</LevelRequirement>
          <Price>
            Sell Price: <Gold>6g</Gold> <Silver>95s</Silver> <Copper>50c</Copper>
          </Price>
        </Weapon>
        <Icon />
        <Weapon>
          <Name rarity='legendary'>Thunderfury, Blessed Blade of the Windseeker</Name>
          <ItemLevel>Item Level 101</ItemLevel>
          <Binding>Binds when picked up</Binding>
          <>Unique</>
          <Type>
            <Slot>One-Hand</Slot> {/* {slot} */}
            Sword
          </Type>
          <DamageMeta>
            <Damage>17 - 30 Damage</Damage> {/* {min} - {max} Damage */}
            <Speed>Speed 2.60</Speed> {/* Speed {speed} */}
            (9 damage per second) {/* {dps} damage per second */}
          </DamageMeta>
          <Stats>
            <Stat>
              <>+3</>
              <StatName>Agility</StatName>
            </Stat>
            <Stat>
              <>+5</>
              <StatName>Stamina</StatName>
            </Stat>
            <Stat>
              <>+0</>
              <StatName>Fire Resistance</StatName>
            </Stat>
            <Stat>
              <>+1</>
              <StatName>Nature Resistance</StatName>
            </Stat>
          </Stats>
          <Durability>Durability 130 / 130</Durability>
          <Proc>
            Chance on hit: Blasts your enemy with lightning, dealing 4 Nature damage and then jumping to additional nearby enemies.  Each jump reduces that victim's Nature resistance by 0. Affects 5 targets. Your primary target is also consumed by a cyclone, slowing its attack speed by 20% for 12 sec.
          </Proc>
          <LevelRequirement>Requires Level 25</LevelRequirement>
          <Price>
            Sell Price: <Gold>6g</Gold> <Silver>95s</Silver> <Copper>50c</Copper>
          </Price>
        </Weapon>
        <Icon />
        <Weapon>
          <Name rarity='legendary'>Thunderfury, Blessed Blade of the Windseeker</Name>
          <ItemLevel>Item Level 101</ItemLevel>
          <Binding>Binds when picked up</Binding>
          <>Unique</>
          <Type>
            <Slot>One-Hand</Slot> {/* {slot} */}
            Sword
          </Type>
          <DamageMeta>
            <Damage>17 - 30 Damage</Damage> {/* {min} - {max} Damage */}
            <Speed>Speed 2.60</Speed> {/* Speed {speed} */}
            (9 damage per second) {/* {dps} damage per second */}
          </DamageMeta>
          <Stats>
            <Stat>
              <>+3</>
              <StatName>Agility</StatName>
            </Stat>
            <Stat>
              <>+5</>
              <StatName>Stamina</StatName>
            </Stat>
            <Stat>
              <>+0</>
              <StatName>Fire Resistance</StatName>
            </Stat>
            <Stat>
              <>+1</>
              <StatName>Nature Resistance</StatName>
            </Stat>
          </Stats>
          <Durability>Durability 130 / 130</Durability>
          <Proc>
            Chance on hit: Blasts your enemy with lightning, dealing 4 Nature damage and then jumping to additional nearby enemies.  Each jump reduces that victim's Nature resistance by 0. Affects 5 targets. Your primary target is also consumed by a cyclone, slowing its attack speed by 20% for 12 sec.
          </Proc>
          <LevelRequirement>Requires Level 25</LevelRequirement>
          <Price>
            Sell Price: <Gold>6g</Gold> <Silver>95s</Silver> <Copper>50c</Copper>
          </Price>
        </Weapon>
      </MarbleBackground>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
`;

const Icon = styled.div`
  height: 62px;
  width: 62px;
  background-color: #191003;
  border: 1px outset white;
  border-radius: 3px;
`;

const Weapon = styled.div`
  position: relative;
  background-color: #050a1f;
  color: white;
  border: 1px outset white;
  border-radius: 3px;
`;

const Name = styled.div<{
  rarity: string;
}>`
  color: ${({ rarity }) => {
    switch (rarity) {
      case 'common':
        return 'white';
      case 'rare':
        return 'blue';
      case 'epic':
        return 'purple';
      case 'legendary':
        return 'orange';
      default:
        return 'grey';
    }
  }};
`;
const ItemLevel = styled.div``;
const Binding = styled.div``;
const Type = styled.div``;
const Slot = styled.div``;
const DamageMeta = styled.div``;
const Damage = styled.div``;
const Speed = styled.div``;
const Stats = styled.div``;
const Stat = styled.div``;
const StatName = styled.div``;
const Durability = styled.div``;
const Proc = styled.div``;
const LevelRequirement = styled.div``;
const Price = styled.div``;
const Gold = styled.div``;
const Silver = styled.div``;
const Copper = styled.div``;

export default App;
