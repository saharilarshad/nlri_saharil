import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SunService {

  private mostAccuratePi = 3

  private calculatePi(decimalPlaces: number): number {
    Logger.log("decimal", decimalPlaces);
    if (decimalPlaces === 6) return 3;
    const piValues = {
      1: 3.1,
      2: 3.14,
      3: 3.141,
      4: 3.1415,
      5: 3.14159,
    };
    return piValues[decimalPlaces] || this.mostAccuratePi;
  }
  getMostAccuratePi(): number {
    return this.mostAccuratePi;
  }

  calculateNextPi(): number {
    const currentDecimalPlaces = this.mostAccuratePi.toString().split('.')[1]?.length || 0;
    // Logger.log(currentDecimalPlaces);
    const nextDecimalPlace = currentDecimalPlaces + 1;
    this.mostAccuratePi = this.calculatePi(nextDecimalPlace);
    return this.mostAccuratePi;
  }

  getCircumference(): number {
    const radiusOfSun = 695700
    return 2 * this.mostAccuratePi * radiusOfSun;
  }



}
