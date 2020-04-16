export interface Banner {
  targetId: number;
  url: string;
  imageUrl: string;
}

export interface HotTags {
  id: number;
  name: string;
  position: number;

}

export interface PersonalSheet {
  name: string;
  id: number;
  playCount: number;
  picUrl: string;
}

export interface Singer {
  id: number;
  name: string;
  picUrl: string;
  albumSize: string;
}
