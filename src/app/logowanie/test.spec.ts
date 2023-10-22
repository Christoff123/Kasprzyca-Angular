import { LogowanieComponent } from "./logowanie.component";

describe('Mój Komponent', () => {
    it('Logowanie', () => {
      const komponent = new LogowanieComponent();
      expect(komponent.title).toBeDefined();
    });
});
  