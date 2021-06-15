import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkString(text: string): boolean {
    const includedLetters = new RegExp('^[abc]*$');
    const aaCombo = new RegExp('\w*(aa)+\w*');
    const bbCombo = new RegExp('\w*(bb)+\w*');

    const aaComboCheck = text.match(aaCombo);
    const bbComboCheck = text.match(bbCombo);

    const comboCheck = ((aaComboCheck && !bbComboCheck ) || (!aaComboCheck && bbComboCheck ));

    if (text.match(includedLetters) && comboCheck) return true;
    return false;
  }
}
