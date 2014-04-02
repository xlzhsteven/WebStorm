/**
 * Created by Xiaolong on 4/1/14.
 */
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
vehicle1.capacity += 4;
vehicle1.submersible = false;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle1["# of weapons"] = 1;
vehicle2.submersible = false;
vehicle2.weapon = "Lasers";
vehicle2["# of weapons"] = 4;
vehicle3.weapon = "Torpedoes";
vehicle3.capacity *= 2;
vehicle3.submersible = true;
vehicle3["# of weapons"] = 8;
