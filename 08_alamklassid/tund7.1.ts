import { kasPositiivne, keskmineSuhkruMass } from "../f1";

test('positiivsus', () => {
   expect(kasPositiivne(3)).toBe(true);
   expect(kasPositiivne(0)).toBe(false);
   expect(kasPositiivne(-5)).toBe(false);
});

test('keskmineSuhkruMass', () => {
   const suhkruMassid = [20, 30, 80];
   const veekogused = [200, 300, 800];
   expect(keskmineSuhkruMass(suhkruMassid, veekogused)).toBeCloseTo(0.1);
});
