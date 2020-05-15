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

// 专辑
export interface PersonalSheet {
  name: string;
  id: number;
  playCount: number;
  picUrl: string;
  tracks: Song[];
}

// 歌手
export interface Singer {
  id: number;
  name: string;
  picUrl: string;
  albumSize: string;
}

// 播放 地址
export interface SongUrl {
  id: number;
  url: string;
}

export interface Song {
  id: number;
  name: string;
  url: string;
  ar: Singer[];
  al: { id: number; name: string; picUrl: string };
  dt: number;
}
