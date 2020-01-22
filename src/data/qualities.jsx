import React from 'react';



let advantage = (<img src="https://i.imgur.com/WCoBcCh.png" alt="" className="icon"/>)
// https://i.imgur.com/WCoBcCh.png
console.log(advantage);

let threat = (<img src="https://i.imgur.com/Lvmnfyk.png" alt="" className="icon"/>)
// https://i.imgur.com/Lvmnfyk.png

let success = (<img src="https://i.imgur.com/axaIZA4.png" alt="" className="icon"/>)
// https://i.imgur.com/axaIZA4.png

let failure = (<img src="https://i.imgur.com/L3CLWeh.png" alt="" className="icon"/>)
// https://i.imgur.com/L3CLWeh.png

let boost = (<img src="https://i.imgur.com/kA2uq9u.png" alt="" className="icon"/>)

let setback = (<img src="https://i.imgur.com/zDlj0MT.png" alt="" className="icon"/>)

let triumph = (<img src="https://i.imgur.com/pUz2Idd.png" alt="" className="icon"/>)
// https://i.imgur.com/pUz2Idd.png

let despair = (<img src="https://i.imgur.com/0IAb7gP.png" alt="" className="icon"/>)
// https://i.imgur.com/0IAb7gP.png

let difficulty = (<img src="https://i.imgur.com/dp3ihEc.png" alt="" className="icon"/>)




const allQualities = {
    "ACCURATE": props => {return(
        <div><p>Accurate weapons are easier to aim or wield, whether through design or technology. For each level of this trait, the attacker adds {boost} to his attack dice pools while using this weapon.</p></div>)},
    "AUTOFIRE": props => {return(
        <div><p>A weapon with Auto-fire can be set to shoot in rapid succession and potentially spray an area with bolts, flechettes, slugs, or other types of projectiles. The advantage in using Auto-fire is that it has the chance to hit multiple targets or hit a single target multiple times. <br/><br/> Attacking with a weapon on Auto-fire is generally less accurate and the attacker must increase the difficulty of the attack check by {difficulty} . The user may choose to not use the Auto-fire quality on a weapon; in this case, he cannot trigger the quality but also does not suffer the aforementioned penalty. <br/><br/>If the attack hits, the attacker can trigger Auto-fire by spending {advantage} {advantage}. Auto-fire can be triggered multiple times. Each time the attacker triggers auto-fire, it deals an additional hit to the target. Each of these counts as an additional hit from that weapon, and each hit deals base damage plus the number of uncanceled {success} on the check. <br/><br/>These additional hits can be allocated to the target, or to other targets within range of the weapon. If the attacker wishes to hit multiple targets, he must decide to do so before making the check. Furthermore, if he wishes to hit multiple targets, his initial target must always be the target with the highest difficulty and highest defense (if this is two separate targets, the GM chooses which target is his initial target). The initial hit must always be against the initial target, subsequent hits generated can be allocated to any of the other designated targets. <br/><br/>Auto-fire weapons can also activate one Critical Injury for each hit generated on the attack per the normal cost; the Critical must target the target of the specific hit.</p></div>)},
    "BREACH": props => {return(
        <div><p>Weapons with Breach burn through the toughest armor, and are often heavy weapons or starship weapons. <br/><br/>Breach weapons ignore one point of Armor for every rating of Breach (meaning they also ignore 10 points of Soak for every rating of Breach).</p></div>)},
    "BURN": props => {return(
        <div><p>Weapons with Burn inflict damage over time. If the attack is successful, the target continues to suffer the weapon's base damage for <font size="5">{props.qualityNumber}</font> rounds. Damage is applied at the start of each of the target's actions. 
        <br/><br/>
        A victim might be able to stop the damage by rolling around on the ground and making an Agility check as an action. This is an Average ({difficulty}{difficulty}) Coordination check on hard surfaces such as the hall of a spaceship, or an Easy [{difficulty}]) Coordination check on grass or soft ground. 
        <br/><br/>
        Jumping into a body of water stops the damage immediately. Both situations assume the flame is from actual combustion rather than a chemical reaction. With the latter, there is usually little the victim can do.</p></div>)},
    "BLAST": props => {return(
        <div><p>The weapon has a large spread, an explosive blast, or similar area of effect, like the detonation of a grenade or a warhead fired from a missile launcher. If the attack is successful and Blast activates, each character (friend or foe) Engaged with the original target suffers <font size="5">{props.qualityNumber}</font> <font color="red"><b>Wounds</b></font> (plus an additional <font color="red"><b>Wound</b></font> per Success as usual). 
        <br/><br/> 
        In a relatively small and enclosed area, the Game Master might decide that everyone in the room suffers damage. 
        <br/><br/> 
        If the Blast quality doesnt activate, the ordnance still detonates, but bad luck or poor aim on the part of the firer (or quick reactions on the part of the victims) means the explosion may not catch anyone else in its radius. However, the user may also trigger Blast if the attack misses, by spending {advantage} {advantage} {advantage}. In this case, the original target and every target engaged with the original target suffers <font size="5">{props.qualityNumber}</font> damage.</p></div>)},
    "CONCUSSIVE": props => {return(
        <div><p>The weapon's attack can leave the target shell-shocked from mighty blows or punishing Shockwaves, unable to perform any but the most basic actions. The target is staggered for <font size="5">{props.qualityNumber}</font> rounds. 
        <br/><br/>
        A staggered target cannot perform actions.</p></div>)},
    "CORTOSIS": props => {return(
        <div><p>Cortosis is an ore found primarily in the Outer Rim. It is extremely rare and valuable, and was used primarily during the Clone Wars against the Jedi Knights. There are two varieties of Cortosis ore. The rarest versions can actually short out a lightsaber's blade, causing it to fail temporarily. The far more common Cortosis ore is still a miraculous substance, because when molded into armor, it forms an interlocking molecular bond that is extremely resistant to energy weapons. 
            <br/><br/>
            Weapons with the Cortosis quality are immune to the Sunder quality. Armor with the Cortosis quality makes the wearer's Soak immune to the Pierce and Breach qualities.</p></div>)},
    "CUMBERSOME": props => {return(
        <div><p>A Cumbersome weapon is large, unwieldy, awkward, or heavy. To wield a Cumbersome weapon properly, the character needs a Brawn characteristic equal to or greater than <font size="5">{props.qualityNumber}</font>. For each point of Brawn the character is deficient, he must increase the difficulty of all checks made while using the weapon by one.</p></div>)},
    "DEFENSIVE": props => {return(
        <div><p>Defensive weapons are particularly good at fending off incoming melee attacks. A character wielding a weapon with the Defensive quality increases his melee defense by <font size="5">{props.qualityNumber}</font>.</p></div>)},
    "DEFLECTION": props => {return(
        <div><p>An item with the Deflection quality increases the wearer's ranged defense equal to its Deflection rating.</p></div>)},
    "DISORIENT": props => {return(
        <div><p>A weapon with Disorient can daze an opponent. When Disorient is triggered, the target is disoriented for <font size="5">{props.qualityNumber}</font> rounds. A disoriented target adds {setback} to all skill checks he performs.</p></div>)},
    "ENSNARE": props => {return(
        <div><p>A weapon with Ensnare binds a foe and restricts his movements. When Ensnare is triggered, the target is immobilized for <font size="5">{props.qualityNumber}</font> rounds. An Ensnared target may attempt a Hard ({difficulty}{difficulty}{difficulty}) Athletics check as his action on his turn to break free from the effect. An immobilized target cannot perform maneuvers.</p></div>)},
    "GUIDED": props => {return(
        <div><p>Certain types of projectiles may benefit from course alterations after being fired—such as guided missiles. If a character misses while firing a Guided weapon and if Guided activates, he may make an attack check at the end of the round. The difficulty of the check is calculated by comparing the weapon's silhouette of 0 to the silhouette of the target (see page 235), and the check's Ability dice equal the weapon's Guided rating. If the test is successful, the weapon'strikes the target and damage is dealt normally. 
        <br/><br/>
        Guided requires {advantage}{advantage}{advantage} to activate, unless otherwise specified in the weapon's description. Remember, the Guided effect can activate on its subsequent attacks, representing the projectile continuing to track the target. 
        <br/><br/> 
        "spoofing" is a countermeasure designed to work against the particular projectile—such as flares designed to draw off an infrared missile. Spoofing directly increases the defense of the target against attacks with the Guided quality.</p></div>)},
    "KNOCKDOWN": props => {return(
        <div><p>When knockdown triggers, the target is knocked prone. Unless specified otherwise, Knockdown requires {advantage}{advantage} to trigger, plus one additional {advantage} per silhouette beyond one.</p></div>)},
    "INACCURATE": props => {return(
        <div><p>Inaccurate weapons are weapons of a shoddy or inferior construction which means they are less likely to be accurate or precise. Alternatively, the weapon's nature may inhibit accuracy. Inaccurate weapons add {setback} to the attacker's dice pool equal to their Inaccurate rating.</p></div>)},
    "INFERIOR": props => {return(
        <div><p>An Inferior item is a lackluster example of its kind, representing shoddy and poor craftsmanship. An Inferior weapon generates automatic {threat} on all checks related to its use, and has its base damage decreased by one. Inferior armor has its encumbrance increased by one and its defense decreased by one. If it does not have defense, decrease its Soak value by one to a minimum of zero.</p></div>)},
    "ION": props => {return(
        <div><p>Ion weapons are designed to affect electrical systems as opposed to dealing raw damage. They are fitted to ships to knock out opponents shields, sensors, and engines. They are shorter range than laser weapons, and deal larger amounts of damage, but their damage is dealt to the target as system strain (usually on vehicles). It is still reduced by armor and Soak. Droids are affected by ion weapons, taking damage to their strain threshold.</p></div>)},
    "LIMITEDAMMO": props => {return(
        <div><p>Some weapons fire particularly large or complex projectiles that cost significant amounts of credits, or are themselves a complete weapon that once launched is expended. A weapon with the Limited Ammo quality may be used to make <font size="5">{props.qualityNumber}</font> attacks before it must be reloaded with a maneuver.
        <br/><br/>
        In addition, each shot expends one of a limited number of rounds of ammo, which must be purchased or otherwise obtained before the weapon can be used. This also applies to grenades and other "one use" weapons which have the Limited Ammo 1 quality (here, the user is not "reloading" the grenade, but drawing another to use-—but mechanically they are equivalent).</p></div>)},
    "LINKED": props => {return(
        <div><p>Some weapons, like the laser cannons fitted to the Z-95 Headhunter, are designed to fire together at the same target. This increases the possibility of a hit as well as the damage dealt. When firing a linked weapon, on a successful attack, the weapon deals one  hit. 
        <br/><br/>
        The wielder may spend {advantage}{advantage} to gain an additional hit, and may do so <font size="5">{props.qualityNumber}</font> times. Additional hits from linked weapons may only be applied against the original target. Each hit deals the weapon's base damage plus total {success} scored on the check.</p></div>)},
    "PIERCE": props => {return(
        <div><p>An attack made with this weapon ignores <font size="5">{props.qualityNumber}</font> points of Soak. If the weapon has more ranks of Pierce than the target's total Soak, it completely ignores the target's Soak. For example, Pierce 3 against a Soak of 2 ignores 2 points of Soak, but the extra "point" of Pierce has no further effect.</p></div>)},
    "PREPARE": props => {return(
        <div><p>Weapons with this quality require time to set up before being used. The user must perform <font size="5">{props.qualityNumber}</font> maneuvers before making attacks with that weapon.</p></div>)},
    "SLOWFIRING": props => {return(
        <div><p>Slow-Firing weapons tend to be large, heavy, emplacement- mounted weapons like the turbolasers found on capital ships, or planetary defense ion cannons. While they deal incredible damage, they need time to recharge or cool down between shots. A weapon's Slow-Firing rating dictates how quickly the weapon can be fired after an attack. For example, a heavy turbolaser with Slow-Firing 2 must wait two Rounds after being fired before it can be fired again.</p></div>)},
    "STUN": props => {return(
        <div><p>A weapon with <font color="blue"><b>Stun</b></font> causes strain to the target. When the <font color="blue"><b>Stun</b></font> quality is activated, it inflicts strain equal to the weapon's <font color="blue"><b>Stun</b></font> rating.</p></div>)},
    "STUNSETTING": props => {return(
        <div><p>A weapon with <font color="blue"><b>Stun</b></font> causes strain to the target. When the <font color="blue"><b>Stun</b></font> quality is activated, it inflicts strain equal to the weapon's <font color="blue"><b>Stun</b></font> rating.</p></div>)},
    "STUNDAMAGE": props => {return(
        <div><p>Some weapons deal <font color="blue"><b>Stun</b></font> damage instead of regular damage. In this case, the weapon deals damage as strain instead of <font color="red"><b>Wounds</b></font>. This damage is still reduced by a target's soak. 
        <br/><br/>
        A variant of this is a <font color="blue"><b>Stun</b></font> setting. As a free action, the wielder can choose to switch the setting of his weapon to  <font color="blue"><b>Stun</b></font>. In this case, it does <font color="blue"><b>Stun</b></font> damage as described above. When weapons with a <font color="blue"><b>Stun</b></font> setting are used to deal <font color="blue"><b>Stun</b></font> damage, their range changes to short and cannot be increased.</p></div>)},
    "SUNDER": props => {return(
        <div><p>When activated, the attacker chooses one item openly wielded by the target (such as a weapon, shield, or item on a belt). That item is damaged one step: to Minor if undamaged, from Minor to Moderate, or from Moderate to Major. If a weapon already suffering Major damage is the target of a successful Sunder, it is destroyed. 
        <br/><br/>
        Sunder requires {advantage} to activate. If activated multiple times in the same attack, each can be applied against the same weapon potentially taking a weapon from undamaged to destroyed in a single attack.</p></div>)},
    "SUPERIOR": props => {return(
        <div><p>A Superior item is a sterling example of its kind, representing masterful craftsmanship. A Superior weapon generates automatic {advantage} on all checks related to its use, and has its base damage increased by one. Superior armor has its encumbrance reduced by one and its soak value increased by one.</p></div>)},
    "TRACTOR": props => {return(
        <div><p>Instead of firing searing beams of laser fire or crackling ion discharges, this weapon fires relatively harmless electromagnetic beams that ensnare ships and hold them fast in space. Tractor beams, like all weapons, are fired at their target using a the appropriate skill check (generally Gunnery) with all suitable modifiers. Once the weapon hits its target, the target may not move unless its pilot makes a successful Piloting check with a difficulty based on the tractor beam's rating. The tractor beam's rating is always noted in parentheses in the weapon's stats next to the quality.</p></div>)},
    "VICIOUS": props => {return(
        <div><p>When this weapon'scores a critical injury or hit, the character adds ten times the Vicious rating to the critical roll. With Vicious 3, for example, the victim adds + 30 to his critical hit result.</p></div>)},
    "UNWIELDY": props => {return(
        <div><p>An Unwieldy weapon is a weapon that can be particularly awkward to use for those without impressive dexterity and hand-eye coordination. To wield an Unwieldy weapon properly, the character needs an Agility characteristic equal to or greater than <font size="5">{props.qualityNumber}</font>. 
        <br/><br/>
        For each point of Agility by which the character is deficient, he must increase the difficulty of all checks made while using the weapon by 1.</p></div>)}
}

const generateQualities = (props = {}) => {
    const qualityCall = allQualities[props.Key]
    try {
        return qualityCall({ qualityNumber: props.qualityNumber })
    }
    catch (_) {
        throw new Error(`most likely key is not defined in all qualities: ${props.Key}`)
    }
}
export default generateQualities;