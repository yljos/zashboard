import {
  ArrowsRightLeftIcon,
  Cog6ToothIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  SwatchIcon,
} from '@heroicons/vue/24/outline'

export const IS_APPLE_DEVICE = /Mac|iPod|iPhone|iPad/.test(navigator.platform)

export const GLOBAL = 'GLOBAL'
export const TEST_URL = 'https://www.gstatic.com/generate_204'
export const IPV6_TEST_URL = 'https:www.gstatic.com/generate_204'
export const NOT_CONNECTED = 0

// 既然只保留英文，这里可以只留 EN_US，或者保留枚举定义但只用英文
export enum LANG {
  EN_US = 'en-US',
  ZH_CN = 'zh-CN',
}

// ❌ 已彻底删除 FONTS 枚举

export enum EMOJIS {
  TWEMOJI = 'twemoji',
  NOTO_COLOR_EMOJI = 'noto-color-emoji',
}

export enum CONNECTIONS_TABLE_ACCESSOR_KEY {
  Close = 'close',
  Type = 'type',
  Process = 'process',
  Host = 'host',
  Rule = 'rule',
  Chains = 'chains',
  Outbound = 'outbound',
  DlSpeed = 'dlSpeed',
  UlSpeed = 'ulSpeed',
  Download = 'dl',
  Upload = 'ul',
  ConnectTime = 'connectTime',
  SourceIP = 'sourceIP',
  SourcePort = 'sourcePort',
  SniffHost = 'sniffHost',
  Destination = 'destination',
  DestinationType = 'destinationType',
  RemoteAddress = 'remoteAddress',
  InboundUser = 'inboundUser',
}

export enum TABLE_WIDTH_MODE {
  AUTO = 'auto',
  MANUAL = 'manual',
}

export enum PROXY_SORT_TYPE {
  DEFAULT = 'defaultsort',
  NAME_ASC = 'nameasc',
  NAME_DESC = 'namedesc',
  LATENCY_ASC = 'latencyasc',
  LATENCY_DESC = 'latencydesc',
}

export enum PROXY_PREVIEW_TYPE {
  AUTO = 'auto',
  DOTS = 'dots',
  BAR = 'bar',
}

export enum RULE_TAB_TYPE {
  RULES = 'rules',
  PROVIDER = 'ruleProvider',
}

export enum PROXY_TAB_TYPE {
  PROXIES = 'proxies',
  PROVIDER = 'proxyProvider',
}

export enum SORT_TYPE {
  HOST = 'host',
  CHAINS = 'chains',
  RULE = 'rule',
  TYPE = 'type',
  CONNECT_TIME = 'connectTime',
  DOWNLOAD = 'download',
  DOWNLOAD_SPEED = 'downloadSpeed',
  UPLOAD = 'upload',
  UPLOAD_SPEED = 'uploadSpeed',
  SOURCE_IP = 'sourceIP',
  INBOUND_USER = 'inboundUser',
}

export enum SORT_DIRECTION {
  ASC = 'asc',
  DESC = 'desc',
}

export enum CONNECTION_TAB_TYPE {
  ACTIVE = 'activeConnections',
  CLOSED = 'closedConnections',
}

export enum LOG_LEVEL {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Fatal = 'fatal',
  Panic = 'panic',
  Silent = 'silent',
}

export enum ROUTE_NAME {
  overview = 'overview',
  proxies = 'proxies',
  connections = 'connections',
  logs = 'logs',
  rules = 'rules',
  settings = 'settings',
  setup = 'setup',
}

export const ROUTE_ICON_MAP = {
  [ROUTE_NAME.overview]: CubeTransparentIcon,
  [ROUTE_NAME.proxies]: GlobeAltIcon,
  [ROUTE_NAME.connections]: ArrowsRightLeftIcon,
  [ROUTE_NAME.rules]: SwatchIcon,
  [ROUTE_NAME.logs]: DocumentTextIcon,
  [ROUTE_NAME.settings]: Cog6ToothIcon,
  [ROUTE_NAME.setup]: CubeTransparentIcon,
}

export enum TABLE_SIZE {
  SMALL = 'small',
  LARGE = 'large',
}

export enum PROXY_CARD_SIZE {
  SMALL = 'small',
  LARGE = 'large',
}

export enum MIN_PROXY_CARD_WIDTH {
  SMALL = 130,
  LARGE = 145,
}

export enum PROXY_CHAIN_DIRECTION {
  NORMAL = 'normal',
  REVERSE = 'reverse',
}

export enum PROXY_TYPE {
  Direct = 'direct',
  Reject = 'reject',
  RejectDrop = 'rejectdrop',
  Compatible = 'compatible',
  Pass = 'pass',
  Dns = 'dns',
  Selector = 'selector',
  Fallback = 'fallback',
  URLTest = 'urltest',
  Smart = 'smart',
  LoadBalance = 'loadbalance',
}

export const SIMPLE_CARD_STYLE = [
  [CONNECTIONS_TABLE_ACCESSOR_KEY.Host, CONNECTIONS_TABLE_ACCESSOR_KEY.ConnectTime],
  [
    CONNECTIONS_TABLE_ACCESSOR_KEY.Chains,
    CONNECTIONS_TABLE_ACCESSOR_KEY.DlSpeed,
    CONNECTIONS_TABLE_ACCESSOR_KEY.Close,
  ],
]

export const DETAILED_CARD_STYLE = [
  [CONNECTIONS_TABLE_ACCESSOR_KEY.Host, CONNECTIONS_TABLE_ACCESSOR_KEY.ConnectTime],
  [
    CONNECTIONS_TABLE_ACCESSOR_KEY.Type,
    CONNECTIONS_TABLE_ACCESSOR_KEY.Download,
    CONNECTIONS_TABLE_ACCESSOR_KEY.Upload,
  ],
  [
    CONNECTIONS_TABLE_ACCESSOR_KEY.Chains,
    CONNECTIONS_TABLE_ACCESSOR_KEY.DlSpeed,
    CONNECTIONS_TABLE_ACCESSOR_KEY.Close,
  ],
]

export const ALL_THEME = ['luxury']

// ❌ 已移除 DEFAULT_THEME 和 THEME 类型，因为主题已锁定

export enum IP_INFO_API {
  IPSB = 'ip.sb',
  IPWHOIS = 'ipwho.is',
  IPAPI = 'ipapi.is',
}

export enum SETTINGS_MENU_KEY {
  general = 'generalSettings',
  backend = 'backendSettings',
  proxies = 'proxySettings',
  connections = 'connectionSettings',
  overview = 'overviewSettings',
}

export enum OVERVIEW_CARD {
  ChartsCard = 'ChartsCard',
  NetworkCard = 'NetworkCard',
  ProviderTrafficOverview = 'ProviderTrafficOverview',
  TopologyCharts = 'TopologyCharts',
  ConnectionHistory = 'ConnectionHistory',
  RuleHitCountCard = 'RuleHitCountCard',
}
