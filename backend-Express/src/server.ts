import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/validate', (req, res) => {
  const cardNumber = req.query.cardNumber as string;
  const isValid = getValidateCard(cardNumber);
  res.json({ isValid });
});

function getValidateCard(cardNumber: string): boolean {
  const cleanedCardNumber: string = cardNumber.replace(/\D/g, '');

  if (cleanedCardNumber.length !== 16) {
    return false;
  }

  const digits: number[] = cleanedCardNumber.split('').map(Number);

  let sum: number = 0;

  for (let i: number = 0; i < 16; i++) {
    let digit: number = digits[i];

    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }
  return sum % 10 === 0;
}

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;