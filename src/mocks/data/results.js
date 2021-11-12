const results = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Josip",
      last: "Michl",
    },
    skills: {
      angular: false,
      react: true,
      vue: false,
    },
    location: {
      street: {
        number: 9457,
        name: "Rosenstraße",
      },
      city: "Chemnitzer Land",
      state: "Saarland",
      country: "Germany",
      postcode: 15869,
      coordinates: {
        latitude: "-44.8147",
        longitude: "-8.1416",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "josip.michl@example.com",
    login: {
      uuid: "893fc2b1-ff88-4504-a86f-34315ac12a31",
      username: "greenzebra288",
      password: "kick",
      salt: "70GHucqz",
      md5: "9ca57f46534f11a4b5dda5b8a97c7675",
      sha1: "a85b802dde00993f090085937ece3fe42ae31284",
      sha256:
        "b2a177a62ad4f3e86ad02964710c91a8e5a5666f7749309794dcaa874ec18cf0",
    },
    dob: {
      date: "1958-11-08T09:38:20.848Z",
      age: 63,
    },
    registered: {
      date: "2005-11-24T19:29:39.814Z",
      age: 16,
    },
    phone: "0367-0161078",
    cell: "0179-1898150",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Orhun",
      last: "Duijst",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 61,
        name: "Baveldspad",
      },
      city: "Wijhe",
      state: "Utrecht",
      country: "Netherlands",
      postcode: 65129,
      coordinates: {
        latitude: "39.2406",
        longitude: "113.8392",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "orhun.duijst@example.com",
    login: {
      uuid: "e2dfe280-b5b3-4e01-ad94-e6a220cb157e",
      username: "beautifulgoose537",
      password: "probes",
      salt: "q3zPijcV",
      md5: "1d9db57947e32a5ffcde9b9d2e50ecc2",
      sha1: "4dfa3d31de2deb627f789c53a696216484776fd3",
      sha256:
        "3cbce4d50bfb3ad22620b619bad8093cedb8eccda434e445784b51ce0e3f740c",
    },
    dob: {
      date: "1992-12-29T01:55:05.566Z",
      age: 29,
    },
    registered: {
      date: "2013-03-20T16:35:08.909Z",
      age: 8,
    },
    phone: "(319)-487-8245",
    cell: "(476)-124-8671",
    id: {
      name: "BSN",
      value: "76753197",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Mario",
      last: "Vidal",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 1958,
        name: "Rue de la Gare",
      },
      city: "Bonaduz",
      state: "Solothurn",
      country: "Switzerland",
      postcode: 1309,
      coordinates: {
        latitude: "23.0319",
        longitude: "-117.8620",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "mario.vidal@example.com",
    login: {
      uuid: "53f7dbd4-787b-4a24-bd9c-1cab862eb36a",
      username: "lazypeacock701",
      password: "sunrise",
      salt: "4FQnL6F5",
      md5: "5c32e2d3788ce70e290d9f90cdadc250",
      sha1: "37ae13891c6c31ff14674d9820cc84267042c714",
      sha256:
        "7c8fa57d6c43c9a43cf25bda74a45f2e4fcd71c174b7ed11ad7ad44046916e63",
    },
    dob: {
      date: "1945-03-06T07:25:53.891Z",
      age: 76,
    },
    registered: {
      date: "2009-09-20T06:12:58.220Z",
      age: 12,
    },
    phone: "079 601 28 25",
    cell: "079 939 98 88",
    id: {
      name: "AVS",
      value: "756.3911.0585.75",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/89.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Madeleine",
      last: "Thomas",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 2255,
        name: "Madras Street",
      },
      city: "Nelson",
      state: "Auckland",
      country: "New Zealand",
      postcode: 26932,
      coordinates: {
        latitude: "87.8581",
        longitude: "154.5223",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "madeleine.thomas@example.com",
    login: {
      uuid: "3a1a8e8a-39e8-4ed8-ba06-e0da023c38ff",
      username: "yellowduck764",
      password: "fishon",
      salt: "v62tVIIC",
      md5: "b5c8df9121faf626d5f1d4d9a02777a2",
      sha1: "88836a282fb2e3fcb6481506e2b17ad6a3ae86c4",
      sha256:
        "9e9b157a404d55673b88372f924eee49b316c9eaf40b8e9bae0a4a311249e943",
    },
    dob: {
      date: "1997-05-18T18:13:45.299Z",
      age: 24,
    },
    registered: {
      date: "2015-09-23T14:03:02.989Z",
      age: 6,
    },
    phone: "(036)-644-6195",
    cell: "(013)-844-3174",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/48.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Chester",
      last: "Perry",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 4263,
        name: "Alexander Road",
      },
      city: "Plymouth",
      state: "Tayside",
      country: "United Kingdom",
      postcode: "LF43 5TP",
      coordinates: {
        latitude: "-22.5000",
        longitude: "154.4383",
      },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "chester.perry@example.com",
    login: {
      uuid: "fddd5f23-19d8-4b9d-b9b3-5378035ed4c8",
      username: "crazylion220",
      password: "havefun",
      salt: "N83cDhpb",
      md5: "3eb9c6ce41f348879708a41b6da16380",
      sha1: "c12e4849ecbb3d766ee2ade3e5e18245797bfb66",
      sha256:
        "59d808fa798a081f53ba829989b87478150d087ce9211eb7436bf314d176f10e",
    },
    dob: {
      date: "1970-03-23T08:59:00.088Z",
      age: 51,
    },
    registered: {
      date: "2009-03-21T11:57:21.629Z",
      age: 12,
    },
    phone: "0161 219 9895",
    cell: "0798-177-476",
    id: {
      name: "NINO",
      value: "XS 34 39 66 P",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Austin",
      last: "Li",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 59,
        name: "East Tamaki Road",
      },
      city: "Lower Hutt",
      state: "Southland",
      country: "New Zealand",
      postcode: 64468,
      coordinates: {
        latitude: "9.3493",
        longitude: "-12.1778",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "austin.li@example.com",
    login: {
      uuid: "5f3bfc71-5aa7-47a2-b812-5d7652b6902b",
      username: "orangebutterfly851",
      password: "pervert",
      salt: "cn47yk3W",
      md5: "1131fa184dad58d5b5a07ab7362b936e",
      sha1: "8655884148f727c93ce770635ca11a5af4ff9f9c",
      sha256:
        "3afdc0bc6fb93642a70448cb356ff5a2338c20b1f922518ac61766d1a1979519",
    },
    dob: {
      date: "1980-04-29T06:10:28.818Z",
      age: 41,
    },
    registered: {
      date: "2010-10-23T16:22:54.038Z",
      age: 11,
    },
    phone: "(798)-684-1190",
    cell: "(233)-720-6466",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Delphine",
      last: "Smith",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 4296,
        name: "George St",
      },
      city: "Hampstead",
      state: "Québec",
      country: "Canada",
      postcode: "G4F 2W9",
      coordinates: {
        latitude: "-38.5993",
        longitude: "-26.5405",
      },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "delphine.smith@example.com",
    login: {
      uuid: "0ae0afe0-7140-4648-a768-c48c33071f6d",
      username: "orangebutterfly547",
      password: "shogun",
      salt: "Dgorcsfz",
      md5: "f29c465db3103f820707896813d81c70",
      sha1: "20410ad5053f3175413f0497e64e66218d6f0b42",
      sha256:
        "fb3e1bc9f8ff3b94dbd06c99f8d214390535768609db2355b413644edaf6c0a3",
    },
    dob: {
      date: "1973-09-03T08:47:12.640Z",
      age: 48,
    },
    registered: {
      date: "2010-04-10T09:44:07.801Z",
      age: 11,
    },
    phone: "509-305-1799",
    cell: "720-916-0479",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Thomas",
      last: "Hamilton",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 9805,
        name: "Park Road",
      },
      city: "Laytown-Bettystown-Mornington",
      state: "South Dublin",
      country: "Ireland",
      postcode: 77589,
      coordinates: {
        latitude: "-86.6726",
        longitude: "51.8503",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "thomas.hamilton@example.com",
    login: {
      uuid: "11ccb64d-aa93-475a-82ff-ef9a33428d25",
      username: "yellowduck379",
      password: "japanese",
      salt: "j3qBjLP1",
      md5: "737509d99f15fe0773891e5112918499",
      sha1: "daf5a68e7afd9f6be858ee33ee0606db859ca81d",
      sha256:
        "c66bb3c8e8669e5f6145f3f9ac7c0bf984c4f69d60494ff3f30503b664bcfc4b",
    },
    dob: {
      date: "1983-04-07T12:21:45.344Z",
      age: 38,
    },
    registered: {
      date: "2017-12-28T03:23:08.021Z",
      age: 4,
    },
    phone: "041-183-9143",
    cell: "081-117-9783",
    id: {
      name: "PPS",
      value: "1906734T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    },
    nat: "IE",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Galina",
      last: "Hauschild",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 2562,
        name: "Bachstraße",
      },
      city: "Lauf an der Pegnitz",
      state: "Nordrhein-Westfalen",
      country: "Germany",
      postcode: 28903,
      coordinates: {
        latitude: "78.6778",
        longitude: "43.8471",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "galina.hauschild@example.com",
    login: {
      uuid: "902f2e3d-c117-4327-9f37-e589d2abe23d",
      username: "crazypanda868",
      password: "another",
      salt: "WHZe6g2Y",
      md5: "b690d44e41a77134b64f00fbdd279b49",
      sha1: "3fdbd315bf7c4681a6cf2a34ae9e7933f56dddc2",
      sha256:
        "ed45256c25f39b68606a655c023b5da9c5b411d72392710607239880fe8a54b9",
    },
    dob: {
      date: "1962-12-15T13:42:31.824Z",
      age: 59,
    },
    registered: {
      date: "2011-01-21T14:32:58.728Z",
      age: 10,
    },
    phone: "0948-4907434",
    cell: "0171-1282280",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: {
      title: "Mademoiselle",
      first: "Claude",
      last: "Barbier",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 8252,
        name: "Boulevard de Balmont",
      },
      city: "Nürensdorf",
      state: "Bern",
      country: "Switzerland",
      postcode: 2882,
      coordinates: {
        latitude: "-85.8932",
        longitude: "111.7901",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "claude.barbier@example.com",
    login: {
      uuid: "16ef0956-4b60-4f06-9e3c-58550fe7b13f",
      username: "redlion858",
      password: "pearson",
      salt: "NPqEBAt2",
      md5: "df519f1e13d63bdc233f506d67df092f",
      sha1: "ba56adcb01237a2edcaaf22794a7870a41e34bdc",
      sha256:
        "b781f64f5d1a688401a0bb5d751e3d768a47e886e58a4a90a2b6b3246f92d310",
    },
    dob: {
      date: "1976-06-28T04:56:50.427Z",
      age: 45,
    },
    registered: {
      date: "2007-03-27T05:27:06.667Z",
      age: 14,
    },
    phone: "079 921 72 93",
    cell: "077 859 92 28",
    id: {
      name: "AVS",
      value: "756.0149.0503.84",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/7.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/7.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Norma",
      last: "Green",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 5377,
        name: "Miller Ave",
      },
      city: "San Francisco",
      state: "Ohio",
      country: "United States",
      postcode: 78355,
      coordinates: {
        latitude: "59.6039",
        longitude: "-113.8220",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "norma.green@example.com",
    login: {
      uuid: "bb6c9d7a-7f65-4ead-a785-f2463758b895",
      username: "lazyleopard746",
      password: "viper1",
      salt: "y545xr6A",
      md5: "ac9585da91fedc3d1a31d71e45476584",
      sha1: "9c963a92f0e55343e31649835a022a5cb2bb2f36",
      sha256:
        "c0711861c7f86cf3c0d73e06f09cafc6dd1cd515848a88771b977f9ec0130622",
    },
    dob: {
      date: "1949-02-08T14:40:28.043Z",
      age: 72,
    },
    registered: {
      date: "2007-08-30T06:09:12.603Z",
      age: 14,
    },
    phone: "(850)-923-8382",
    cell: "(055)-451-6075",
    id: {
      name: "SSN",
      value: "178-74-0847",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Frida",
      last: "Solstad",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 7287,
        name: "Halvor Blinderens plass",
      },
      city: "Båtsfjord",
      state: "Møre og Romsdal",
      country: "Norway",
      postcode: "7079",
      coordinates: {
        latitude: "34.5619",
        longitude: "-83.3854",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "frida.solstad@example.com",
    login: {
      uuid: "3606e444-98db-4475-baa9-e1277036a903",
      username: "beautifulbird660",
      password: "cinema",
      salt: "7PbIzGa4",
      md5: "fde0d0f1623d5e3600c2b89e0fff709e",
      sha1: "e01b7aec13ea74af228711208e7ad175a21cf02f",
      sha256:
        "ac6b49619002e8763ec59f8cf482b176566db5e565a6d8e10cc7688d5d92a4cd",
    },
    dob: {
      date: "1953-02-16T12:34:20.365Z",
      age: 68,
    },
    registered: {
      date: "2006-11-20T16:23:09.608Z",
      age: 15,
    },
    phone: "58044812",
    cell: "42957120",
    id: {
      name: "FN",
      value: "16025319455",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    },
    nat: "NO",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Stanley",
      last: "Snyder",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 2109,
        name: "College St",
      },
      city: "Mildura",
      state: "Western Australia",
      country: "Australia",
      postcode: 2411,
      coordinates: {
        latitude: "71.3084",
        longitude: "160.8374",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "stanley.snyder@example.com",
    login: {
      uuid: "62eca81d-a7cc-4fda-9732-f0455c31a799",
      username: "brownfrog696",
      password: "anfield",
      salt: "LrFSpgP9",
      md5: "4fe9f904b7ac7150282b9654e1e6d794",
      sha1: "828279bb6b4c6012f5a6d032946f5068dafcdb3d",
      sha256:
        "73c2b70000a4142fc3d2b9f04f9ea35d9d45a2c19fbdc2dcc2ddfac9dcf81626",
    },
    dob: {
      date: "1958-09-22T12:02:26.769Z",
      age: 63,
    },
    registered: {
      date: "2013-07-23T06:17:39.538Z",
      age: 8,
    },
    phone: "08-5004-0271",
    cell: "0427-841-704",
    id: {
      name: "TFN",
      value: "306999844",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
    },
    nat: "AU",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Victoria",
      last: "Petersen",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 8384,
        name: "Syrenvej",
      },
      city: "St.Merløse",
      state: "Midtjylland",
      country: "Denmark",
      postcode: 37374,
      coordinates: {
        latitude: "-58.2415",
        longitude: "89.9593",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "victoria.petersen@example.com",
    login: {
      uuid: "5d94686d-d713-4404-96c8-1787281f5082",
      username: "brownkoala735",
      password: "crusader",
      salt: "ezXszKm2",
      md5: "c1e7411cc77caad3c8b8569c3c83ac1c",
      sha1: "1d0171a986d273a0cdf2fd33bea92206aa232a19",
      sha256:
        "ed3f1424d42b2814d890475654c9ea0bd6dc3264e19b804e7e4409ee90983245",
    },
    dob: {
      date: "1994-10-22T08:14:10.580Z",
      age: 27,
    },
    registered: {
      date: "2008-03-19T05:45:01.382Z",
      age: 13,
    },
    phone: "44383848",
    cell: "88643973",
    id: {
      name: "CPR",
      value: "221094-7785",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/40.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Ruben",
      last: "Porter",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 8069,
        name: "Victoria Road",
      },
      city: "Newry",
      state: "Northumberland",
      country: "United Kingdom",
      postcode: "HP3D 0ZU",
      coordinates: {
        latitude: "44.3506",
        longitude: "164.4266",
      },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "ruben.porter@example.com",
    login: {
      uuid: "fb41e2b0-6be4-4634-9ea5-e55f98dc2d47",
      username: "beautifulbear370",
      password: "georgia",
      salt: "RwvphwM2",
      md5: "660e03bc30392185fe1ee0dceca2a05a",
      sha1: "94c3fabbc405a33454f5adbc8d2f58a15b29c501",
      sha256:
        "7df60280b874337507c2ff3bedd162a3368dd1b95f9d6e18e021a62aac557b7b",
    },
    dob: {
      date: "1987-11-21T03:23:26.862Z",
      age: 34,
    },
    registered: {
      date: "2007-04-04T10:38:04.259Z",
      age: 14,
    },
    phone: "015395 95271",
    cell: "0765-996-060",
    id: {
      name: "NINO",
      value: "LS 95 97 94 E",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Abby",
      last: "Reynolds",
    },
    skills: {
      angular: false,
      react: false,
      vue: false,
    },
    location: {
      street: {
        number: 3840,
        name: "Albert Road",
      },
      city: "Newport",
      state: "Oxfordshire",
      country: "United Kingdom",
      postcode: "GS3 0HR",
      coordinates: {
        latitude: "-63.2478",
        longitude: "39.1263",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "abby.reynolds@example.com",
    login: {
      uuid: "ad7f34be-871c-46e2-b531-cfcd53f0ac66",
      username: "orangeduck349",
      password: "ceasar",
      salt: "rXxQthHk",
      md5: "8e7ec9ee746e2c9f2e974c383ff60786",
      sha1: "bb89ccfc6bb57e47a6aacde8b082fc9795d186c7",
      sha256:
        "8d1cf5ccb0386ef3e5ca7c4a7159c34a8416a1d03986d86928bf3bcb3f4c5e6c",
    },
    dob: {
      date: "1951-12-04T01:21:16.408Z",
      age: 70,
    },
    registered: {
      date: "2005-08-10T12:14:36.526Z",
      age: 16,
    },
    phone: "016977 74125",
    cell: "0775-457-966",
    id: {
      name: "NINO",
      value: "GG 08 21 29 X",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
    },
    nat: "GB",
  },
];

export default results;
