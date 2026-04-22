export type IconLibrary = 'Ionicons' | 'MaterialCommunityIcons' | 'svg';

export interface PresetSubscription {
  id: string;
  name: string;
  category: 'Entertainment' | 'Productivity' | 'Education' | 'Fittnes&Health' | 'Work' | 'Home' | 'Other';
  iconName: string;
  iconLibrary: IconLibrary;
  iconColor: string;
}

export const ICON_COLORS = [
  '#E50914', '#FF4500', '#FF9900', '#F5A623',
  '#1DB954', '#58CC02', '#00C2A8', '#00A8E0',
  '#4285F4', '#0A66C2', '#5C00BD', '#7D2AE8',
  '#FC3C44', '#EF5466', '#4A154B', '#555555',
];

export const PRESET_SUBSCRIPTIONS: PresetSubscription[] = [
  // Video Streaming
  { id: 'netflix',          name: 'Netflix',             category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'netflix',          iconColor: '#E50914' },
  { id: 'disney-plus',      name: 'Disney+',             category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'disney-plus',      iconColor: '#113CCF' },
  { id: 'prime-video',      name: 'Prime Video',         category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'prime-video',      iconColor: '#00A8E0' },
  { id: 'apple-tv',         name: 'Apple TV+',           category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'apple',            iconColor: '#555555' },
  { id: 'youtube-premium',  name: 'YouTube Premium',     category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'youtube',          iconColor: '#FF0000' },
  { id: 'hulu',             name: 'Hulu',                category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'hulu',             iconColor: '#1CE783' },
  { id: 'max',              name: 'Max',                 category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'max',              iconColor: '#002BE7' },
  { id: 'paramount-plus',   name: 'Paramount+',          category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'paramount-plus',   iconColor: '#0057E7' },
  { id: 'crunchyroll',      name: 'Crunchyroll',         category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'crunchyroll',      iconColor: '#F47521' },
  { id: 'dazn',             name: 'DAZN',                category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'dazn',             iconColor: '#F5A623' },
  { id: 'twitch',           name: 'Twitch',              category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'twitch',           iconColor: '#9146FF' },
  { id: 'espn-plus',        name: 'ESPN+',               category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'espn-plus',        iconColor: '#005EB8' },
  { id: 'discovery-plus',   name: 'Discovery+',          category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'discovery-plus',   iconColor: '#2175D9' },
  { id: 'now-tv',           name: 'NOW TV',              category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'now-tv',           iconColor: '#009999' },
  { id: 'britbox',          name: 'BritBox',             category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'britbox',          iconColor: '#CC0000' },
  { id: 'rakuten-tv',       name: 'Rakuten TV',          category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'rakuten-tv',       iconColor: '#BF0000' },
  { id: 'plex',             name: 'Plex',                category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'plex',             iconColor: '#E5A00D' },
  { id: 'mubi',             name: 'MUBI',                category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'mubi',             iconColor: '#B2001B' },
  { id: 'apple-one',        name: 'Apple One',           category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'apple',            iconColor: '#444444' },
  // Music
  { id: 'spotify',          name: 'Spotify',             category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'spotify',          iconColor: '#1DB954' },
  { id: 'apple-music',      name: 'Apple Music',         category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'apple',            iconColor: '#FC3C44' },
  { id: 'youtube-music',    name: 'YouTube Music',       category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'youtube',          iconColor: '#FF0000' },
  { id: 'tidal',            name: 'Tidal',               category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'tidal',            iconColor: '#222222' },
  { id: 'deezer',           name: 'Deezer',              category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'deezer',           iconColor: '#EF5466' },
  { id: 'amazon-music',     name: 'Amazon Music',        category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'amazon-music',     iconColor: '#00A8E0' },
  { id: 'soundcloud',       name: 'SoundCloud',          category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'soundcloud',       iconColor: '#FF5500' },
  { id: 'audible',          name: 'Audible',             category: 'Education',     iconLibrary: 'Ionicons',               iconName: 'headset',          iconColor: '#F8991C' },
  // Productivity & Work
  { id: 'microsoft-365',    name: 'Microsoft 365',       category: 'Productivity',  iconLibrary: 'MaterialCommunityIcons', iconName: 'microsoft-office', iconColor: '#D83B01' },
  { id: 'adobe-cc',         name: 'Adobe Creative Cloud',category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'adobe-cc',         iconColor: '#FF0000' },
  { id: 'notion',           name: 'Notion',              category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'notion',           iconColor: '#222222' },
  { id: 'slack',            name: 'Slack',               category: 'Work',          iconLibrary: 'MaterialCommunityIcons', iconName: 'slack',            iconColor: '#4A154B' },
  { id: 'canva-pro',        name: 'Canva Pro',           category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'canva-pro',        iconColor: '#7D2AE8' },
  { id: 'chatgpt-plus',     name: 'ChatGPT Plus',        category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'chatgpt-plus',     iconColor: '#00A67E' },
  // Cloud Storage
  { id: 'dropbox',          name: 'Dropbox',             category: 'Productivity',  iconLibrary: 'MaterialCommunityIcons', iconName: 'dropbox',          iconColor: '#0061FF' },
  { id: 'google-one',       name: 'Google One',          category: 'Productivity',  iconLibrary: 'MaterialCommunityIcons', iconName: 'google',           iconColor: '#4285F4' },
  { id: 'icloud',           name: 'iCloud+',             category: 'Productivity',  iconLibrary: 'MaterialCommunityIcons', iconName: 'apple',            iconColor: '#3399FF' },
  // Gaming
  { id: 'playstation-plus', name: 'PlayStation Plus',    category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'sony-playstation', iconColor: '#003087' },
  { id: 'xbox-gamepass',    name: 'Xbox Game Pass',      category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'microsoft-xbox',   iconColor: '#107C10' },
  { id: 'nintendo-online',  name: 'Nintendo Online',     category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'nintendo-switch',  iconColor: '#E4000F' },
  { id: 'steam',            name: 'Steam',               category: 'Entertainment', iconLibrary: 'MaterialCommunityIcons', iconName: 'steam',            iconColor: '#1B2838' },
  { id: 'ea-play',          name: 'EA Play',             category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'ea-play',          iconColor: '#FF4747' },
  { id: 'ubisoft-plus',     name: 'Ubisoft+',            category: 'Entertainment', iconLibrary: 'svg',                   iconName: 'ubisoft-plus',     iconColor: '#0C2F83' },
  // Fitness & Health
  { id: 'calm',             name: 'Calm',                category: 'Fittnes&Health', iconLibrary: 'svg',                  iconName: 'calm',             iconColor: '#4A90D9' },
  { id: 'headspace',        name: 'Headspace',           category: 'Fittnes&Health', iconLibrary: 'svg',                  iconName: 'headspace',        iconColor: '#FF9600' },
  // Education
  { id: 'duolingo',         name: 'Duolingo',            category: 'Education',     iconLibrary: 'svg',                   iconName: 'duolingo',         iconColor: '#58CC02' },
  { id: 'kindle',           name: 'Kindle Unlimited',    category: 'Education',     iconLibrary: 'svg',                   iconName: 'kindle',           iconColor: '#FF9900' },
  { id: 'udemy',            name: 'Udemy',               category: 'Education',     iconLibrary: 'svg',                   iconName: 'udemy',            iconColor: '#A435F0' },
  // Security & VPN
  { id: 'nordvpn',          name: 'NordVPN',             category: 'Other',         iconLibrary: 'svg',                   iconName: 'nordvpn',          iconColor: '#4687FF' },
  { id: 'expressvpn',       name: 'ExpressVPN',          category: 'Other',         iconLibrary: 'svg',                   iconName: 'expressvpn',       iconColor: '#DA3940' },
  // Productivity tools (additional)
  { id: 'evernote',         name: 'Evernote',            category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'evernote',         iconColor: '#00A82D' },
  { id: 'todoist',          name: 'Todoist',             category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'todoist',          iconColor: '#DB4035' },
  { id: 'trello',           name: 'Trello',              category: 'Productivity',  iconLibrary: 'MaterialCommunityIcons', iconName: 'trello',           iconColor: '#0079BF' },
  { id: 'asana',            name: 'Asana',               category: 'Work',          iconLibrary: 'svg',                   iconName: 'asana',            iconColor: '#FC636B' },
  { id: 'zoom',             name: 'Zoom',                category: 'Work',          iconLibrary: 'svg',                   iconName: 'zoom',             iconColor: '#2D8CFF' },
  { id: 'github',           name: 'GitHub',              category: 'Work',          iconLibrary: 'MaterialCommunityIcons', iconName: 'github',           iconColor: '#181717' },
  { id: 'figma',            name: 'Figma',               category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'figma',            iconColor: '#F24E1E' },
  { id: '1password',        name: '1Password',           category: 'Other',         iconLibrary: 'svg',                   iconName: '1password',        iconColor: '#3B66BC' },
  { id: 'grammarly',        name: 'Grammarly',           category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'grammarly',        iconColor: '#15C39A' },
  { id: 'obsidian',         name: 'Obsidian',            category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'obsidian',         iconColor: '#7C3AED' },
  { id: 'discord',          name: 'Discord',             category: 'Work',          iconLibrary: 'svg',                   iconName: 'discord',          iconColor: '#5865F2' },
  { id: 'linear',           name: 'Linear',              category: 'Work',          iconLibrary: 'svg',                   iconName: 'linear',           iconColor: '#5E6AD2' },
  { id: 'perplexity',       name: 'Perplexity AI',       category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'perplexity',       iconColor: '#1FB8CD' },
  { id: 'claude',           name: 'Claude',              category: 'Productivity',  iconLibrary: 'svg',                   iconName: 'claude',           iconColor: '#CC785C' },
  // Professional
  { id: 'linkedin-premium', name: 'LinkedIn Premium',    category: 'Work',          iconLibrary: 'MaterialCommunityIcons', iconName: 'linkedin',         iconColor: '#0A66C2' },
];
