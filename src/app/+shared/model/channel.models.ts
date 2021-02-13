export interface Channels {
  total: number;
  channelDetails: Channel[];
}


export interface Channel {
  name: string;
  introduce: string;
  picture: PictureList;
  genres: Genre[];
}

export interface Genre {
  genreID: string;
  genreType: string;
  genreName: string;
}

export interface PictureList {
  hcsSlaveAddrs: any[];
  extensionFields: any[];
  backgrounds: string[];
  channelPics: string[];
  channelBlackWhites: string[];
  others: any[];
}
