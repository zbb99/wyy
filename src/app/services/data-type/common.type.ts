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
  tracks: Song[];
}

export interface Singer {
  id: number;
  name: string;
  picUrl: string;
  albumSize: string;
}

// 歌曲
export interface Song {
  id: string;
  name: string;
  url: string;
  ar: Singer[];
  al: { id: number; name: string; picUrl: string };
  dt: number;
}


