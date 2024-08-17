export type Currency = {
  code: string;
  name: string;
};

export type CurrencyResponse = {
  Data: CriptoCurrency[];
};

export type CriptoCurrency = {
  CoinInfo: {
    FullName: string;
    Name: string;
  };
};

export type CriptoCoin = {
  code: string;
  moneda: string;
};
