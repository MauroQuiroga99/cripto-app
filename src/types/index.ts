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

export type SeletedCurrency = {
  currency: string;
  criptocurrency: string;
};

export type CryptoPrice = {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  LASTUPDATE: string;
  IMAGEURL: string;
};
