
// Generated by https://quicktype.io

export interface SearchResponse {
  data:       Gif[];
  meta:       Meta;
  pagination: Pagination;
}

export interface Gif {
  type:                       Type;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   Username;
  source:                     string;
  title:                      string;
  rating:                     Rating;
  content_url:                string;
  source_tld:                 SourceTLD;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            string;
  trending_datetime:          string;
  images:                     Images;
  user:                       User;
  analytics_response_payload: string;
  analytics:                  Analytics;
}

export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original:                 { [key: string]: string };
  downsized:                The480_WStill;
  downsized_large:          The480_WStill;
  downsized_medium:         The480_WStill;
  downsized_small:          DownsizedSmall;
  downsized_still:          The480_WStill;
  fixed_height:             { [key: string]: string };
  fixed_height_downsampled: { [key: string]: string };
  fixed_height_small:       { [key: string]: string };
  fixed_height_small_still: The480_WStill;
  fixed_height_still:       The480_WStill;
  fixed_width:              { [key: string]: string };
  fixed_width_downsampled:  { [key: string]: string };
  fixed_width_small:        { [key: string]: string };
  fixed_width_small_still:  The480_WStill;
  fixed_width_still:        The480_WStill;
  looping:                  { [key: string]: string };
  original_still:           The480_WStill;
  original_mp4:             DownsizedSmall;
  preview:                  DownsizedSmall;
  preview_gif:              The480_WStill;
  preview_webp:             The480_WStill;
  "480w_still":             The480_WStill;
  hd?:                      DownsizedSmall;
}

export interface The480_WStill {
  height: string;
  width:  string;
  size:   string;
  url:    string;
}

export interface DownsizedSmall {
  height:   string;
  width:    string;
  mp4_size: string;
  mp4:      string;
}

export enum Rating {
  G = "g",
  PG = "pg",
  PG13 = "pg-13",
}

export enum SourceTLD {
  Empty = "",
  WWWTwitchTv = "www.twitch.tv",
}

export enum Type {
  GIF = "gif",
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      Username;
  display_name:  DisplayName;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export enum DisplayName {
  VALORANTEsports = "VALORANT Esports",
  Valorant = "VALORANT",
  Xbox = "Xbox",
}

export enum Username {
  Playvalorant = "playvalorant",
  ValorantEsports = "Valorant_Esports",
  Xbox = "xbox",
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}
