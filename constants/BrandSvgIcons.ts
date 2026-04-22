import { SvgProps } from 'react-native-svg'
import React from 'react'

import PrimeVideoSvg    from '../assets/brand-icons/prime-video.svg'
import DisneyPlusSvg    from '../assets/brand-icons/disney-plus.svg'
import HuluSvg          from '../assets/brand-icons/hulu.svg'
import MaxSvg           from '../assets/brand-icons/max.svg'
import ParamountSvg     from '../assets/brand-icons/paramount-plus.svg'
import CrunchyrollSvg   from '../assets/brand-icons/crunchyroll.svg'
import DaznSvg          from '../assets/brand-icons/dazn.svg'
import DiscoveryPlusSvg from '../assets/brand-icons/discovery-plus.svg'
import NowTvSvg         from '../assets/brand-icons/now-tv.svg'
import BritBoxSvg       from '../assets/brand-icons/britbox.svg'
import RakutenTvSvg     from '../assets/brand-icons/rakuten-tv.svg'
import PlexSvg          from '../assets/brand-icons/plex.svg'
import MubiSvg          from '../assets/brand-icons/mubi.svg'
import EspnPlusSvg      from '../assets/brand-icons/espn-plus.svg'
import TidalSvg         from '../assets/brand-icons/tidal.svg'
import DeezerSvg        from '../assets/brand-icons/deezer.svg'
import AmazonMusicSvg   from '../assets/brand-icons/amazon-music.svg'
import AdobeCcSvg       from '../assets/brand-icons/adobe-cc.svg'
import NotionSvg        from '../assets/brand-icons/notion.svg'
import CanvaProSvg      from '../assets/brand-icons/canva-pro.svg'
import ChatGptSvg       from '../assets/brand-icons/chatgpt-plus.svg'
import CalmSvg          from '../assets/brand-icons/calm.svg'
import HeadspaceSvg     from '../assets/brand-icons/headspace.svg'
import DuolingoSvg      from '../assets/brand-icons/duolingo.svg'
import KindleSvg        from '../assets/brand-icons/kindle.svg'
import NordVpnSvg       from '../assets/brand-icons/nordvpn.svg'
import ExpressVpnSvg    from '../assets/brand-icons/expressvpn.svg'
import EvernoteSvg      from '../assets/brand-icons/evernote.svg'
import TodoistSvg       from '../assets/brand-icons/todoist.svg'
import AsanaSvg         from '../assets/brand-icons/asana.svg'
import ZoomSvg          from '../assets/brand-icons/zoom.svg'
import FigmaSvg         from '../assets/brand-icons/figma.svg'
import OnePasswordSvg   from '../assets/brand-icons/1password.svg'
import GrammarlySvg     from '../assets/brand-icons/grammarly.svg'
import ObsidianSvg      from '../assets/brand-icons/obsidian.svg'
import DiscordSvg       from '../assets/brand-icons/discord.svg'
import LinearSvg        from '../assets/brand-icons/linear.svg'
import PerplexitySvg    from '../assets/brand-icons/perplexity.svg'
import EaPlaySvg        from '../assets/brand-icons/ea-play.svg'
import UbisoftSvg       from '../assets/brand-icons/ubisoft-plus.svg'
import UdemySvg         from '../assets/brand-icons/udemy.svg'
import ClaudeSvg        from '../assets/brand-icons/claude.svg'

const BRAND_SVG_ICONS: Record<string, React.FC<SvgProps>> = {
  'prime-video':    PrimeVideoSvg,
  'disney-plus':    DisneyPlusSvg,
  'hulu':           HuluSvg,
  'max':            MaxSvg,
  'paramount-plus': ParamountSvg,
  'crunchyroll':    CrunchyrollSvg,
  'dazn':           DaznSvg,
  'discovery-plus': DiscoveryPlusSvg,
  'now-tv':         NowTvSvg,
  'britbox':        BritBoxSvg,
  'rakuten-tv':     RakutenTvSvg,
  'plex':           PlexSvg,
  'mubi':           MubiSvg,
  'espn-plus':      EspnPlusSvg,
  'tidal':          TidalSvg,
  'deezer':         DeezerSvg,
  'amazon-music':   AmazonMusicSvg,
  'adobe-cc':       AdobeCcSvg,
  'notion':         NotionSvg,
  'canva-pro':      CanvaProSvg,
  'chatgpt-plus':   ChatGptSvg,
  'calm':           CalmSvg,
  'headspace':      HeadspaceSvg,
  'duolingo':       DuolingoSvg,
  'kindle':         KindleSvg,
  'nordvpn':        NordVpnSvg,
  'expressvpn':     ExpressVpnSvg,
  'evernote':       EvernoteSvg,
  'todoist':        TodoistSvg,
  'asana':          AsanaSvg,
  'zoom':           ZoomSvg,
  'figma':          FigmaSvg,
  '1password':      OnePasswordSvg,
  'grammarly':      GrammarlySvg,
  'obsidian':       ObsidianSvg,
  'discord':        DiscordSvg,
  'linear':         LinearSvg,
  'perplexity':     PerplexitySvg,
  'ea-play':        EaPlaySvg,
  'ubisoft-plus':   UbisoftSvg,
  'udemy':          UdemySvg,
  'claude':         ClaudeSvg,
}

export default BRAND_SVG_ICONS
