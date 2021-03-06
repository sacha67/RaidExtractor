﻿export interface OptimizeDialogSettings {
  optimizeBanner: boolean;
  optimizeCloak: boolean;
  optimizeRing: boolean;
  optimizeBoots: boolean;
  optimizeChest: boolean;
  optimizeGloves: boolean;
  optimizeShield: boolean;
  optimizeHelmet: boolean;
  optimizeWeapon: boolean;
  weightAccuracy: number | undefined;
  capAccuracy: number;
  maximumAccuracy: number;
  minimumAccuracy: number;
  capResistance: number;
  weightResistance: number | undefined;
  maximumResistance: number;
  minimumResistance: number;
  weightCriticalDamage: number | undefined;
  capCriticalDamage: number;
  maximumCriticalDamage: number;
  minimumCriticalDamage: number;
  weightCriticalChance: number | undefined;
  capCriticalChance: number;
  maximumCriticalChance: number;
  minimumCriticalChance: number;
  weightSpeed: number | undefined;
  capSpeed: number;
  maximumSpeed: number;
  minimumSpeed: number;
  weightDefense: number | undefined;
  capDefense: number;
  maximumDefense: number;
  minimumDefense: number;
  weightAttack: number | undefined;
  capAttack: number;
  maximumAttack: number;
  minimumAttack: number;
  weightHealth: number | undefined;
  capHealth: number;
  maximumHealth: number;
  filter: string;
  maxToSixteen: boolean;
  preferredSet: string;
  minimumHealth: number;
}
