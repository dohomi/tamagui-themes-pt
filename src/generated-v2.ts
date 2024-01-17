type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  '#fbfdff',
  '#f4faff',
  '#e6f4fe',
  '#d5efff',
  '#c2e5ff',
  '#acd8fc',
  '#8ec8f6',
  '#5eb1ef',
  '#0090ff',
  '#0588f0',
  '#0d74ce',
  '#113264',
  '#FBFCFD',
  '#F8F9FA',
  '#F1F2F5',
  '#ECEDF0',
  '#E6E7EB',
  '#DFE2E6',
  '#D7DADF',
  '#C1C6CD',
  '#888E96',
  '#7E848C',
  '#686E76',
  '#11161C',
  '#fbfefc',
  '#f4fbf6',
  '#e6f6eb',
  '#d6f1df',
  '#c4e8d1',
  '#adddc0',
  '#8eceaa',
  '#5bb98b',
  '#30a46c',
  '#2b9a66',
  '#218358',
  '#193b2d',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  '#FDFDFE',
  '#F8FBFF',
  '#F0F5FF',
  '#E6EFFE',
  '#D9E5FC',
  '#C6D9F9',
  '#ACC5F2',
  '#819FDB',
  '#3963B8',
  '#294D94',
  '#213C73',
  '#091326',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  '#fffcfc',
  '#fff8f7',
  '#feebe7',
  '#ffdcd3',
  '#ffcdc2',
  '#fdbdaf',
  '#f5a898',
  '#ec8e7b',
  '#e54d2e',
  '#dd4425',
  '#d13415',
  '#5c271f',
  '#fefdfb',
  '#fefbe9',
  '#fff7c2',
  '#ffee9c',
  '#fbe577',
  '#f3d673',
  '#e9c162',
  '#e2a336',
  '#ffc53d',
  '#ffba18',
  '#ab6400',
  '#4f3422',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  '#0d1520',
  '#111927',
  '#0d2847',
  '#003362',
  '#004074',
  '#104d87',
  '#205d9e',
  '#2870bd',
  '#3b9eff',
  '#70b8ff',
  '#c2e6ff',
  '#151718',
  '#1A1C1E',
  '#202325',
  '#26282B',
  '#313438',
  '#3A3E42',
  '#4C4F55',
  '#696F77',
  '#787D85',
  '#9B9FA6',
  '#ECEDEE',
  '#0e1512',
  '#121b17',
  '#132d21',
  '#113b29',
  '#174933',
  '#20573e',
  '#28684a',
  '#2f7c57',
  '#33b074',
  '#3dd68c',
  '#b1f1cb',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  '#141821',
  '#161C2E',
  '#192540',
  '#1C2C4F',
  '#1F3157',
  '#223866',
  '#25417A',
  '#2B5099',
  '#336CD6',
  '#70A0FF',
  '#EDF2FC',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  '#181111',
  '#1f1513',
  '#391714',
  '#4e1511',
  '#5e1c16',
  '#6e2920',
  '#853a2d',
  '#ac4d39',
  '#ec6142',
  '#ff977d',
  '#fbd3cb',
  '#16120c',
  '#1d180f',
  '#302008',
  '#3f2700',
  '#4d3000',
  '#5c3d05',
  '#714f19',
  '#8f6424',
  '#ffd60a',
  '#ffca16',
  '#ffe7b3',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(15, 60.0%, 17.0%, 0)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(272, 66.0%, 16.0%, 0)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(24, 97.0%, 93.2%, 0)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(279, 75.0%, 95.7%, 0)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8],[28, 14],[29, 15],[30, 16],[31, 17],[32, 18],[33, 19],[34, 20],[35, 21],[36, 22],[37, 23],[38, 24],[39, 25],[40, 26],[41, 27],[42, 28],[43, 29],[44, 30],[45, 31],[46, 32],[47, 33],[48, 34],[49, 35],[50, 36],[51, 37],[52, 38],[53, 39],[54, 40],[55, 41],[56, 42],[57, 43],[58, 44],[59, 45],[60, 46],[61, 47],[62, 48],[63, 49],[64, 50],[65, 51],[66, 52],[67, 53],[68, 54],[69, 55],[70, 56],[71, 57],[72, 58],[73, 59],[74, 60],[75, 61],[76, 62],[77, 63],[78, 64],[79, 65],[80, 66],[81, 67],[82, 68],[83, 69],[84, 70],[85, 71],[86, 72],[87, 73],[88, 74],[89, 75],[90, 76],[91, 77],[92, 78],[93, 79],[94, 80],[95, 81],[96, 82],[97, 83],[98, 84],[99, 85],[100, 86],[101, 87],[102, 88],[103, 89],[104, 90],[105, 91],[106, 92],[107, 93],[108, 94],[109, 95],[110, 96],[111, 97],[112, 98],[113, 99],[114, 100],[115, 101],[116, 102],[117, 103],[118, 104],[119, 105],[120, 106],[121, 107],[122, 108],[123, 109],[124, 110],[125, 110],[126, 111],[127, 111]])

export const light = n1
const n2 = t([[0, 112],[1, 113],[2, 114],[3, 115],[4, 116],[5, 117],[6, 118],[7, 119],[8, 120],[9, 121],[10, 122],[11, 0],[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 13],[18, 0],[19, 122],[20, 0],[21, 122],[22, 12],[23, 116],[24, 117],[25, 115],[26, 116],[27, 120],[28, 123],[29, 124],[30, 125],[31, 126],[32, 127],[33, 128],[34, 129],[35, 130],[36, 22],[37, 131],[38, 132],[39, 133],[40, 134],[41, 135],[42, 136],[43, 137],[44, 137],[45, 138],[46, 139],[47, 140],[48, 141],[49, 142],[50, 143],[51, 144],[52, 145],[53, 146],[54, 147],[55, 148],[56, 149],[57, 150],[58, 151],[59, 152],[60, 46],[61, 153],[62, 154],[63, 155],[64, 156],[65, 157],[66, 158],[67, 159],[68, 160],[69, 161],[70, 162],[71, 163],[72, 58],[73, 164],[74, 165],[75, 166],[76, 167],[77, 168],[78, 169],[79, 170],[80, 171],[81, 172],[82, 173],[83, 174],[84, 70],[85, 175],[86, 176],[87, 177],[88, 178],[89, 179],[90, 180],[91, 181],[92, 182],[93, 183],[94, 184],[95, 185],[96, 82],[97, 186],[98, 187],[99, 188],[100, 189],[101, 190],[102, 191],[103, 192],[104, 193],[105, 194],[106, 195],[107, 196],[108, 94],[109, 197],[110, 198],[111, 199],[112, 200],[113, 201],[114, 202],[115, 203],[116, 204],[117, 205],[118, 206],[119, 207],[120, 106],[121, 208],[122, 209],[123, 210],[124, 211],[125, 211],[126, 212],[127, 212]])

export const dark = n2
const n3 = t([[0, 50],[1, 51],[2, 52],[3, 53],[4, 54],[5, 55],[6, 57],[7, 58],[8, 59],[9, 60],[10, 61],[11, 11],[12, 51],[13, 52],[14, 53],[15, 54],[16, 50],[17, 213],[18, 11],[19, 61],[20, 11],[21, 61],[22, 214],[23, 53],[24, 54],[25, 53],[26, 53],[27, 59]])

export const light_orange = n3
const n4 = t([[0, 98],[1, 99],[2, 100],[3, 101],[4, 102],[5, 103],[6, 105],[7, 106],[8, 107],[9, 108],[10, 109],[11, 11],[12, 99],[13, 100],[14, 101],[15, 102],[16, 98],[17, 98],[18, 11],[19, 109],[20, 11],[21, 109],[22, 109],[23, 101],[24, 102],[25, 101],[26, 101],[27, 107]])

export const light_yellow = n4
const n5 = t([[0, 38],[1, 39],[2, 40],[3, 41],[4, 42],[5, 43],[6, 45],[7, 46],[8, 47],[9, 48],[10, 49],[11, 11],[12, 39],[13, 40],[14, 41],[15, 42],[16, 38],[17, 38],[18, 11],[19, 49],[20, 11],[21, 49],[22, 49],[23, 41],[24, 42],[25, 41],[26, 41],[27, 47]])

export const light_green = n5
const n6 = t([[0, 14],[1, 15],[2, 16],[3, 17],[4, 18],[5, 19],[6, 21],[7, 22],[8, 23],[9, 24],[10, 25],[11, 11],[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]])

export const light_blue = n6
const n7 = t([[0, 74],[1, 75],[2, 76],[3, 77],[4, 78],[5, 79],[6, 81],[7, 82],[8, 83],[9, 84],[10, 85],[11, 11],[12, 75],[13, 76],[14, 77],[15, 78],[16, 74],[17, 215],[18, 11],[19, 85],[20, 11],[21, 85],[22, 216],[23, 77],[24, 78],[25, 77],[26, 77],[27, 83]])

export const light_purple = n7
const n8 = t([[0, 62],[1, 63],[2, 64],[3, 65],[4, 66],[5, 67],[6, 69],[7, 70],[8, 71],[9, 72],[10, 73],[11, 11],[12, 63],[13, 64],[14, 65],[15, 66],[16, 62],[17, 62],[18, 11],[19, 73],[20, 11],[21, 73],[22, 73],[23, 65],[24, 66],[25, 65],[26, 65],[27, 71]])

export const light_pink = n8
const n9 = t([[0, 86],[1, 87],[2, 88],[3, 89],[4, 90],[5, 91],[6, 93],[7, 94],[8, 95],[9, 96],[10, 97],[11, 11],[12, 87],[13, 88],[14, 89],[15, 90],[16, 86],[17, 86],[18, 11],[19, 97],[20, 11],[21, 97],[22, 97],[23, 89],[24, 90],[25, 89],[26, 89],[27, 95]])

export const light_red = n9
const n10 = t([[0, 26],[1, 27],[2, 28],[3, 29],[4, 30],[5, 31],[6, 33],[7, 34],[8, 35],[9, 36],[10, 37],[11, 11],[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 26],[18, 11],[19, 37],[20, 11],[21, 37],[22, 37],[23, 29],[24, 30],[25, 29],[26, 29],[27, 35]])

export const light_gray = n10
const n11 = t([[0, 156],[1, 157],[2, 158],[3, 159],[4, 160],[5, 161],[6, 163],[7, 58],[8, 164],[9, 165],[10, 166],[11, 0],[12, 157],[13, 158],[14, 159],[15, 160],[16, 156],[17, 217],[18, 0],[19, 166],[20, 0],[21, 166],[22, 218],[23, 160],[24, 161],[25, 159],[26, 160],[27, 164]])

export const dark_orange = n11
const n12 = t([[0, 200],[1, 201],[2, 202],[3, 203],[4, 204],[5, 205],[6, 207],[7, 106],[8, 208],[9, 209],[10, 210],[11, 0],[12, 201],[13, 202],[14, 203],[15, 204],[16, 200],[17, 200],[18, 0],[19, 210],[20, 0],[21, 210],[22, 210],[23, 204],[24, 205],[25, 203],[26, 204],[27, 208]])

export const dark_yellow = n12
const n13 = t([[0, 145],[1, 146],[2, 147],[3, 148],[4, 149],[5, 150],[6, 152],[7, 46],[8, 153],[9, 154],[10, 155],[11, 0],[12, 146],[13, 147],[14, 148],[15, 149],[16, 145],[17, 145],[18, 0],[19, 155],[20, 0],[21, 155],[22, 155],[23, 149],[24, 150],[25, 148],[26, 149],[27, 153]])

export const dark_green = n13
const n14 = t([[0, 123],[1, 124],[2, 125],[3, 126],[4, 127],[5, 128],[6, 130],[7, 22],[8, 131],[9, 132],[10, 133],[11, 0],[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 123],[18, 0],[19, 133],[20, 0],[21, 133],[22, 133],[23, 127],[24, 128],[25, 126],[26, 127],[27, 131]])

export const dark_blue = n14
const n15 = t([[0, 178],[1, 179],[2, 180],[3, 181],[4, 182],[5, 183],[6, 185],[7, 82],[8, 186],[9, 187],[10, 188],[11, 0],[12, 179],[13, 180],[14, 181],[15, 182],[16, 178],[17, 219],[18, 0],[19, 188],[20, 0],[21, 188],[22, 220],[23, 182],[24, 183],[25, 181],[26, 182],[27, 186]])

export const dark_purple = n15
const n16 = t([[0, 167],[1, 168],[2, 169],[3, 170],[4, 171],[5, 172],[6, 174],[7, 70],[8, 175],[9, 176],[10, 177],[11, 0],[12, 168],[13, 169],[14, 170],[15, 171],[16, 167],[17, 167],[18, 0],[19, 177],[20, 0],[21, 177],[22, 177],[23, 171],[24, 172],[25, 170],[26, 171],[27, 175]])

export const dark_pink = n16
const n17 = t([[0, 189],[1, 190],[2, 191],[3, 192],[4, 193],[5, 194],[6, 196],[7, 94],[8, 197],[9, 198],[10, 199],[11, 0],[12, 190],[13, 191],[14, 192],[15, 193],[16, 189],[17, 189],[18, 0],[19, 199],[20, 0],[21, 199],[22, 199],[23, 193],[24, 194],[25, 192],[26, 193],[27, 197]])

export const dark_red = n17
const n18 = t([[0, 134],[1, 135],[2, 136],[3, 137],[4, 137],[5, 138],[6, 140],[7, 141],[8, 142],[9, 143],[10, 144],[11, 0],[12, 135],[13, 136],[14, 137],[15, 137],[16, 134],[17, 134],[18, 0],[19, 144],[20, 0],[21, 144],[22, 144],[23, 137],[24, 138],[25, 137],[26, 137],[27, 142]])

export const dark_gray = n18
const n19 = t([[12, 221]])

export const light_SheetOverlay = n19
export const light_DialogOverlay = n19
export const light_ModalOverlay = n19
export const light_orange_SheetOverlay = n19
export const light_orange_DialogOverlay = n19
export const light_orange_ModalOverlay = n19
export const light_yellow_SheetOverlay = n19
export const light_yellow_DialogOverlay = n19
export const light_yellow_ModalOverlay = n19
export const light_green_SheetOverlay = n19
export const light_green_DialogOverlay = n19
export const light_green_ModalOverlay = n19
export const light_blue_SheetOverlay = n19
export const light_blue_DialogOverlay = n19
export const light_blue_ModalOverlay = n19
export const light_purple_SheetOverlay = n19
export const light_purple_DialogOverlay = n19
export const light_purple_ModalOverlay = n19
export const light_pink_SheetOverlay = n19
export const light_pink_DialogOverlay = n19
export const light_pink_ModalOverlay = n19
export const light_red_SheetOverlay = n19
export const light_red_DialogOverlay = n19
export const light_red_ModalOverlay = n19
export const light_gray_SheetOverlay = n19
export const light_gray_DialogOverlay = n19
export const light_gray_ModalOverlay = n19
export const light_alt1_SheetOverlay = n19
export const light_alt1_DialogOverlay = n19
export const light_alt1_ModalOverlay = n19
export const light_alt2_SheetOverlay = n19
export const light_alt2_DialogOverlay = n19
export const light_alt2_ModalOverlay = n19
export const light_active_SheetOverlay = n19
export const light_active_DialogOverlay = n19
export const light_active_ModalOverlay = n19
export const light_orange_alt1_SheetOverlay = n19
export const light_orange_alt1_DialogOverlay = n19
export const light_orange_alt1_ModalOverlay = n19
export const light_orange_alt2_SheetOverlay = n19
export const light_orange_alt2_DialogOverlay = n19
export const light_orange_alt2_ModalOverlay = n19
export const light_orange_active_SheetOverlay = n19
export const light_orange_active_DialogOverlay = n19
export const light_orange_active_ModalOverlay = n19
export const light_yellow_alt1_SheetOverlay = n19
export const light_yellow_alt1_DialogOverlay = n19
export const light_yellow_alt1_ModalOverlay = n19
export const light_yellow_alt2_SheetOverlay = n19
export const light_yellow_alt2_DialogOverlay = n19
export const light_yellow_alt2_ModalOverlay = n19
export const light_yellow_active_SheetOverlay = n19
export const light_yellow_active_DialogOverlay = n19
export const light_yellow_active_ModalOverlay = n19
export const light_green_alt1_SheetOverlay = n19
export const light_green_alt1_DialogOverlay = n19
export const light_green_alt1_ModalOverlay = n19
export const light_green_alt2_SheetOverlay = n19
export const light_green_alt2_DialogOverlay = n19
export const light_green_alt2_ModalOverlay = n19
export const light_green_active_SheetOverlay = n19
export const light_green_active_DialogOverlay = n19
export const light_green_active_ModalOverlay = n19
export const light_blue_alt1_SheetOverlay = n19
export const light_blue_alt1_DialogOverlay = n19
export const light_blue_alt1_ModalOverlay = n19
export const light_blue_alt2_SheetOverlay = n19
export const light_blue_alt2_DialogOverlay = n19
export const light_blue_alt2_ModalOverlay = n19
export const light_blue_active_SheetOverlay = n19
export const light_blue_active_DialogOverlay = n19
export const light_blue_active_ModalOverlay = n19
export const light_purple_alt1_SheetOverlay = n19
export const light_purple_alt1_DialogOverlay = n19
export const light_purple_alt1_ModalOverlay = n19
export const light_purple_alt2_SheetOverlay = n19
export const light_purple_alt2_DialogOverlay = n19
export const light_purple_alt2_ModalOverlay = n19
export const light_purple_active_SheetOverlay = n19
export const light_purple_active_DialogOverlay = n19
export const light_purple_active_ModalOverlay = n19
export const light_pink_alt1_SheetOverlay = n19
export const light_pink_alt1_DialogOverlay = n19
export const light_pink_alt1_ModalOverlay = n19
export const light_pink_alt2_SheetOverlay = n19
export const light_pink_alt2_DialogOverlay = n19
export const light_pink_alt2_ModalOverlay = n19
export const light_pink_active_SheetOverlay = n19
export const light_pink_active_DialogOverlay = n19
export const light_pink_active_ModalOverlay = n19
export const light_red_alt1_SheetOverlay = n19
export const light_red_alt1_DialogOverlay = n19
export const light_red_alt1_ModalOverlay = n19
export const light_red_alt2_SheetOverlay = n19
export const light_red_alt2_DialogOverlay = n19
export const light_red_alt2_ModalOverlay = n19
export const light_red_active_SheetOverlay = n19
export const light_red_active_DialogOverlay = n19
export const light_red_active_ModalOverlay = n19
export const light_gray_alt1_SheetOverlay = n19
export const light_gray_alt1_DialogOverlay = n19
export const light_gray_alt1_ModalOverlay = n19
export const light_gray_alt2_SheetOverlay = n19
export const light_gray_alt2_DialogOverlay = n19
export const light_gray_alt2_ModalOverlay = n19
export const light_gray_active_SheetOverlay = n19
export const light_gray_active_DialogOverlay = n19
export const light_gray_active_ModalOverlay = n19
const n20 = t([[12, 222]])

export const dark_SheetOverlay = n20
export const dark_DialogOverlay = n20
export const dark_ModalOverlay = n20
export const dark_orange_SheetOverlay = n20
export const dark_orange_DialogOverlay = n20
export const dark_orange_ModalOverlay = n20
export const dark_yellow_SheetOverlay = n20
export const dark_yellow_DialogOverlay = n20
export const dark_yellow_ModalOverlay = n20
export const dark_green_SheetOverlay = n20
export const dark_green_DialogOverlay = n20
export const dark_green_ModalOverlay = n20
export const dark_blue_SheetOverlay = n20
export const dark_blue_DialogOverlay = n20
export const dark_blue_ModalOverlay = n20
export const dark_purple_SheetOverlay = n20
export const dark_purple_DialogOverlay = n20
export const dark_purple_ModalOverlay = n20
export const dark_pink_SheetOverlay = n20
export const dark_pink_DialogOverlay = n20
export const dark_pink_ModalOverlay = n20
export const dark_red_SheetOverlay = n20
export const dark_red_DialogOverlay = n20
export const dark_red_ModalOverlay = n20
export const dark_gray_SheetOverlay = n20
export const dark_gray_DialogOverlay = n20
export const dark_gray_ModalOverlay = n20
export const dark_alt1_SheetOverlay = n20
export const dark_alt1_DialogOverlay = n20
export const dark_alt1_ModalOverlay = n20
export const dark_alt2_SheetOverlay = n20
export const dark_alt2_DialogOverlay = n20
export const dark_alt2_ModalOverlay = n20
export const dark_active_SheetOverlay = n20
export const dark_active_DialogOverlay = n20
export const dark_active_ModalOverlay = n20
export const dark_orange_alt1_SheetOverlay = n20
export const dark_orange_alt1_DialogOverlay = n20
export const dark_orange_alt1_ModalOverlay = n20
export const dark_orange_alt2_SheetOverlay = n20
export const dark_orange_alt2_DialogOverlay = n20
export const dark_orange_alt2_ModalOverlay = n20
export const dark_orange_active_SheetOverlay = n20
export const dark_orange_active_DialogOverlay = n20
export const dark_orange_active_ModalOverlay = n20
export const dark_yellow_alt1_SheetOverlay = n20
export const dark_yellow_alt1_DialogOverlay = n20
export const dark_yellow_alt1_ModalOverlay = n20
export const dark_yellow_alt2_SheetOverlay = n20
export const dark_yellow_alt2_DialogOverlay = n20
export const dark_yellow_alt2_ModalOverlay = n20
export const dark_yellow_active_SheetOverlay = n20
export const dark_yellow_active_DialogOverlay = n20
export const dark_yellow_active_ModalOverlay = n20
export const dark_green_alt1_SheetOverlay = n20
export const dark_green_alt1_DialogOverlay = n20
export const dark_green_alt1_ModalOverlay = n20
export const dark_green_alt2_SheetOverlay = n20
export const dark_green_alt2_DialogOverlay = n20
export const dark_green_alt2_ModalOverlay = n20
export const dark_green_active_SheetOverlay = n20
export const dark_green_active_DialogOverlay = n20
export const dark_green_active_ModalOverlay = n20
export const dark_blue_alt1_SheetOverlay = n20
export const dark_blue_alt1_DialogOverlay = n20
export const dark_blue_alt1_ModalOverlay = n20
export const dark_blue_alt2_SheetOverlay = n20
export const dark_blue_alt2_DialogOverlay = n20
export const dark_blue_alt2_ModalOverlay = n20
export const dark_blue_active_SheetOverlay = n20
export const dark_blue_active_DialogOverlay = n20
export const dark_blue_active_ModalOverlay = n20
export const dark_purple_alt1_SheetOverlay = n20
export const dark_purple_alt1_DialogOverlay = n20
export const dark_purple_alt1_ModalOverlay = n20
export const dark_purple_alt2_SheetOverlay = n20
export const dark_purple_alt2_DialogOverlay = n20
export const dark_purple_alt2_ModalOverlay = n20
export const dark_purple_active_SheetOverlay = n20
export const dark_purple_active_DialogOverlay = n20
export const dark_purple_active_ModalOverlay = n20
export const dark_pink_alt1_SheetOverlay = n20
export const dark_pink_alt1_DialogOverlay = n20
export const dark_pink_alt1_ModalOverlay = n20
export const dark_pink_alt2_SheetOverlay = n20
export const dark_pink_alt2_DialogOverlay = n20
export const dark_pink_alt2_ModalOverlay = n20
export const dark_pink_active_SheetOverlay = n20
export const dark_pink_active_DialogOverlay = n20
export const dark_pink_active_ModalOverlay = n20
export const dark_red_alt1_SheetOverlay = n20
export const dark_red_alt1_DialogOverlay = n20
export const dark_red_alt1_ModalOverlay = n20
export const dark_red_alt2_SheetOverlay = n20
export const dark_red_alt2_DialogOverlay = n20
export const dark_red_alt2_ModalOverlay = n20
export const dark_red_active_SheetOverlay = n20
export const dark_red_active_DialogOverlay = n20
export const dark_red_active_ModalOverlay = n20
export const dark_gray_alt1_SheetOverlay = n20
export const dark_gray_alt1_DialogOverlay = n20
export const dark_gray_alt1_ModalOverlay = n20
export const dark_gray_alt2_SheetOverlay = n20
export const dark_gray_alt2_DialogOverlay = n20
export const dark_gray_alt2_ModalOverlay = n20
export const dark_gray_active_SheetOverlay = n20
export const dark_gray_active_DialogOverlay = n20
export const dark_gray_active_ModalOverlay = n20
const n21 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]])

export const light_alt1 = n21
const n22 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]])

export const light_alt2 = n22
const n23 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 13],[10, 13],[11, 13],[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]])

export const light_active = n23
const n24 = t([[0, 113],[1, 114],[2, 115],[3, 116],[4, 117],[5, 118],[6, 119],[7, 120],[8, 121],[9, 122],[10, 0],[11, 0],[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[18, 122],[19, 121],[20, 122],[21, 121],[22, 0],[23, 117],[24, 118],[25, 116],[26, 117],[27, 119]])

export const dark_alt1 = n24
const n25 = t([[0, 114],[1, 115],[2, 116],[3, 117],[4, 118],[5, 119],[6, 120],[7, 121],[8, 122],[9, 0],[10, 0],[11, 0],[12, 115],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 121],[19, 120],[20, 121],[21, 120],[22, 122],[23, 117],[24, 118],[25, 116],[26, 117],[27, 118]])

export const dark_alt2 = n25
const n26 = t([[0, 115],[1, 116],[2, 117],[3, 118],[4, 119],[5, 120],[6, 121],[7, 122],[8, 0],[9, 12],[10, 12],[11, 12],[12, 116],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[19, 119],[20, 120],[21, 119],[22, 121],[23, 118],[24, 119],[25, 117],[26, 118],[27, 117]])

export const dark_active = n26
const n27 = t([[0, 51],[1, 52],[2, 53],[3, 54],[4, 55],[5, 57],[6, 58],[7, 59],[8, 60],[9, 61],[10, 11],[11, 11],[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 50],[18, 61],[19, 60],[20, 61],[21, 60],[22, 11],[23, 54],[24, 55],[25, 54],[26, 54],[27, 58]])

export const light_orange_alt1 = n27
const n28 = t([[0, 52],[1, 53],[2, 54],[3, 55],[4, 57],[5, 58],[6, 59],[7, 60],[8, 61],[9, 11],[10, 11],[11, 11],[12, 53],[13, 54],[14, 55],[15, 57],[16, 52],[17, 51],[18, 60],[19, 59],[20, 60],[21, 59],[22, 61],[23, 54],[24, 55],[25, 54],[26, 54],[27, 57]])

export const light_orange_alt2 = n28
const n29 = t([[0, 53],[1, 54],[2, 55],[3, 57],[4, 58],[5, 59],[6, 60],[7, 61],[8, 11],[9, 214],[10, 214],[11, 214],[12, 54],[13, 55],[14, 57],[15, 58],[16, 53],[17, 52],[19, 58],[20, 59],[21, 58],[22, 60],[23, 55],[24, 57],[25, 55],[26, 55],[27, 55]])

export const light_orange_active = n29
const n30 = t([[0, 99],[1, 100],[2, 101],[3, 102],[4, 103],[5, 105],[6, 106],[7, 107],[8, 108],[9, 109],[10, 11],[11, 11],[12, 100],[13, 101],[14, 102],[15, 103],[16, 99],[17, 98],[18, 109],[19, 108],[20, 109],[21, 108],[22, 11],[23, 102],[24, 103],[25, 102],[26, 102],[27, 106]])

export const light_yellow_alt1 = n30
const n31 = t([[0, 100],[1, 101],[2, 102],[3, 103],[4, 105],[5, 106],[6, 107],[7, 108],[8, 109],[9, 11],[10, 11],[11, 11],[12, 101],[13, 102],[14, 103],[15, 105],[16, 100],[17, 99],[18, 108],[19, 107],[20, 108],[21, 107],[22, 109],[23, 102],[24, 103],[25, 102],[26, 102],[27, 105]])

export const light_yellow_alt2 = n31
const n32 = t([[0, 101],[1, 102],[2, 103],[3, 105],[4, 106],[5, 107],[6, 108],[7, 109],[8, 11],[9, 109],[10, 109],[11, 109],[12, 102],[13, 103],[14, 105],[15, 106],[16, 101],[17, 100],[19, 106],[20, 107],[21, 106],[22, 108],[23, 103],[24, 105],[25, 103],[26, 103],[27, 103]])

export const light_yellow_active = n32
const n33 = t([[0, 39],[1, 40],[2, 41],[3, 42],[4, 43],[5, 45],[6, 46],[7, 47],[8, 48],[9, 49],[10, 11],[11, 11],[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 49],[19, 48],[20, 49],[21, 48],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 46]])

export const light_green_alt1 = n33
const n34 = t([[0, 40],[1, 41],[2, 42],[3, 43],[4, 45],[5, 46],[6, 47],[7, 48],[8, 49],[9, 11],[10, 11],[11, 11],[12, 41],[13, 42],[14, 43],[15, 45],[16, 40],[17, 39],[18, 48],[19, 47],[20, 48],[21, 47],[22, 49],[23, 42],[24, 43],[25, 42],[26, 42],[27, 45]])

export const light_green_alt2 = n34
const n35 = t([[0, 41],[1, 42],[2, 43],[3, 45],[4, 46],[5, 47],[6, 48],[7, 49],[8, 11],[9, 49],[10, 49],[11, 49],[12, 42],[13, 43],[14, 45],[15, 46],[16, 41],[17, 40],[19, 46],[20, 47],[21, 46],[22, 48],[23, 43],[24, 45],[25, 43],[26, 43],[27, 43]])

export const light_green_active = n35
const n36 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 21],[6, 22],[7, 23],[8, 24],[9, 25],[10, 11],[11, 11],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]])

export const light_blue_alt1 = n36
const n37 = t([[0, 16],[1, 17],[2, 18],[3, 19],[4, 21],[5, 22],[6, 23],[7, 24],[8, 25],[9, 11],[10, 11],[11, 11],[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]])

export const light_blue_alt2 = n37
const n38 = t([[0, 17],[1, 18],[2, 19],[3, 21],[4, 22],[5, 23],[6, 24],[7, 25],[8, 11],[9, 25],[10, 25],[11, 25],[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]])

export const light_blue_active = n38
const n39 = t([[0, 75],[1, 76],[2, 77],[3, 78],[4, 79],[5, 81],[6, 82],[7, 83],[8, 84],[9, 85],[10, 11],[11, 11],[12, 76],[13, 77],[14, 78],[15, 79],[16, 75],[17, 74],[18, 85],[19, 84],[20, 85],[21, 84],[22, 11],[23, 78],[24, 79],[25, 78],[26, 78],[27, 82]])

export const light_purple_alt1 = n39
const n40 = t([[0, 76],[1, 77],[2, 78],[3, 79],[4, 81],[5, 82],[6, 83],[7, 84],[8, 85],[9, 11],[10, 11],[11, 11],[12, 77],[13, 78],[14, 79],[15, 81],[16, 76],[17, 75],[18, 84],[19, 83],[20, 84],[21, 83],[22, 85],[23, 78],[24, 79],[25, 78],[26, 78],[27, 81]])

export const light_purple_alt2 = n40
const n41 = t([[0, 77],[1, 78],[2, 79],[3, 81],[4, 82],[5, 83],[6, 84],[7, 85],[8, 11],[9, 216],[10, 216],[11, 216],[12, 78],[13, 79],[14, 81],[15, 82],[16, 77],[17, 76],[19, 82],[20, 83],[21, 82],[22, 84],[23, 79],[24, 81],[25, 79],[26, 79],[27, 79]])

export const light_purple_active = n41
const n42 = t([[0, 63],[1, 64],[2, 65],[3, 66],[4, 67],[5, 69],[6, 70],[7, 71],[8, 72],[9, 73],[10, 11],[11, 11],[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 62],[18, 73],[19, 72],[20, 73],[21, 72],[22, 11],[23, 66],[24, 67],[25, 66],[26, 66],[27, 70]])

export const light_pink_alt1 = n42
const n43 = t([[0, 64],[1, 65],[2, 66],[3, 67],[4, 69],[5, 70],[6, 71],[7, 72],[8, 73],[9, 11],[10, 11],[11, 11],[12, 65],[13, 66],[14, 67],[15, 69],[16, 64],[17, 63],[18, 72],[19, 71],[20, 72],[21, 71],[22, 73],[23, 66],[24, 67],[25, 66],[26, 66],[27, 69]])

export const light_pink_alt2 = n43
const n44 = t([[0, 65],[1, 66],[2, 67],[3, 69],[4, 70],[5, 71],[6, 72],[7, 73],[8, 11],[9, 73],[10, 73],[11, 73],[12, 66],[13, 67],[14, 69],[15, 70],[16, 65],[17, 64],[19, 70],[20, 71],[21, 70],[22, 72],[23, 67],[24, 69],[25, 67],[26, 67],[27, 67]])

export const light_pink_active = n44
const n45 = t([[0, 87],[1, 88],[2, 89],[3, 90],[4, 91],[5, 93],[6, 94],[7, 95],[8, 96],[9, 97],[10, 11],[11, 11],[12, 88],[13, 89],[14, 90],[15, 91],[16, 87],[17, 86],[18, 97],[19, 96],[20, 97],[21, 96],[22, 11],[23, 90],[24, 91],[25, 90],[26, 90],[27, 94]])

export const light_red_alt1 = n45
const n46 = t([[0, 88],[1, 89],[2, 90],[3, 91],[4, 93],[5, 94],[6, 95],[7, 96],[8, 97],[9, 11],[10, 11],[11, 11],[12, 89],[13, 90],[14, 91],[15, 93],[16, 88],[17, 87],[18, 96],[19, 95],[20, 96],[21, 95],[22, 97],[23, 90],[24, 91],[25, 90],[26, 90],[27, 93]])

export const light_red_alt2 = n46
const n47 = t([[0, 89],[1, 90],[2, 91],[3, 93],[4, 94],[5, 95],[6, 96],[7, 97],[8, 11],[9, 97],[10, 97],[11, 97],[12, 90],[13, 91],[14, 93],[15, 94],[16, 89],[17, 88],[19, 94],[20, 95],[21, 94],[22, 96],[23, 91],[24, 93],[25, 91],[26, 91],[27, 91]])

export const light_red_active = n47
const n48 = t([[0, 27],[1, 28],[2, 29],[3, 30],[4, 31],[5, 33],[6, 34],[7, 35],[8, 36],[9, 37],[10, 11],[11, 11],[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 37],[19, 36],[20, 37],[21, 36],[22, 11],[23, 30],[24, 31],[25, 30],[26, 30],[27, 34]])

export const light_gray_alt1 = n48
const n49 = t([[0, 28],[1, 29],[2, 30],[3, 31],[4, 33],[5, 34],[6, 35],[7, 36],[8, 37],[9, 11],[10, 11],[11, 11],[12, 29],[13, 30],[14, 31],[15, 33],[16, 28],[17, 27],[18, 36],[19, 35],[20, 36],[21, 35],[22, 37],[23, 30],[24, 31],[25, 30],[26, 30],[27, 33]])

export const light_gray_alt2 = n49
const n50 = t([[0, 29],[1, 30],[2, 31],[3, 33],[4, 34],[5, 35],[6, 36],[7, 37],[8, 11],[9, 37],[10, 37],[11, 37],[12, 30],[13, 31],[14, 33],[15, 34],[16, 29],[17, 28],[19, 34],[20, 35],[21, 34],[22, 36],[23, 31],[24, 33],[25, 31],[26, 31],[27, 31]])

export const light_gray_active = n50
const n51 = t([[0, 157],[1, 158],[2, 159],[3, 160],[4, 161],[5, 163],[6, 58],[7, 164],[8, 165],[9, 166],[10, 0],[11, 0],[12, 158],[13, 159],[14, 160],[15, 161],[16, 157],[17, 156],[18, 166],[19, 165],[20, 166],[21, 165],[22, 0],[23, 161],[24, 163],[25, 160],[26, 161],[27, 58]])

export const dark_orange_alt1 = n51
const n52 = t([[0, 158],[1, 159],[2, 160],[3, 161],[4, 163],[5, 58],[6, 164],[7, 165],[8, 166],[9, 0],[10, 0],[11, 0],[12, 159],[13, 160],[14, 161],[15, 163],[16, 158],[17, 157],[18, 165],[19, 164],[20, 165],[21, 164],[22, 166],[23, 161],[24, 163],[25, 160],[26, 161],[27, 163]])

export const dark_orange_alt2 = n52
const n53 = t([[0, 159],[1, 160],[2, 161],[3, 163],[4, 58],[5, 164],[6, 165],[7, 166],[8, 0],[9, 218],[10, 218],[11, 218],[12, 160],[13, 161],[14, 163],[15, 58],[16, 159],[17, 158],[19, 58],[20, 164],[21, 58],[22, 165],[23, 163],[24, 58],[25, 161],[26, 163],[27, 161]])

export const dark_orange_active = n53
const n54 = t([[0, 201],[1, 202],[2, 203],[3, 204],[4, 205],[5, 207],[6, 106],[7, 208],[8, 209],[9, 210],[10, 0],[11, 0],[12, 202],[13, 203],[14, 204],[15, 205],[16, 201],[17, 200],[18, 210],[19, 209],[20, 210],[21, 209],[22, 0],[23, 205],[24, 207],[25, 204],[26, 205],[27, 106]])

export const dark_yellow_alt1 = n54
const n55 = t([[0, 202],[1, 203],[2, 204],[3, 205],[4, 207],[5, 106],[6, 208],[7, 209],[8, 210],[9, 0],[10, 0],[11, 0],[12, 203],[13, 204],[14, 205],[15, 207],[16, 202],[17, 201],[18, 209],[19, 208],[20, 209],[21, 208],[22, 210],[23, 205],[24, 207],[25, 204],[26, 205],[27, 207]])

export const dark_yellow_alt2 = n55
const n56 = t([[0, 203],[1, 204],[2, 205],[3, 207],[4, 106],[5, 208],[6, 209],[7, 210],[8, 0],[9, 210],[10, 210],[11, 210],[12, 204],[13, 205],[14, 207],[15, 106],[16, 203],[17, 202],[19, 106],[20, 208],[21, 106],[22, 209],[23, 207],[24, 106],[25, 205],[26, 207],[27, 205]])

export const dark_yellow_active = n56
const n57 = t([[0, 146],[1, 147],[2, 148],[3, 149],[4, 150],[5, 152],[6, 46],[7, 153],[8, 154],[9, 155],[10, 0],[11, 0],[12, 147],[13, 148],[14, 149],[15, 150],[16, 146],[17, 145],[18, 155],[19, 154],[20, 155],[21, 154],[22, 0],[23, 150],[24, 152],[25, 149],[26, 150],[27, 46]])

export const dark_green_alt1 = n57
const n58 = t([[0, 147],[1, 148],[2, 149],[3, 150],[4, 152],[5, 46],[6, 153],[7, 154],[8, 155],[9, 0],[10, 0],[11, 0],[12, 148],[13, 149],[14, 150],[15, 152],[16, 147],[17, 146],[18, 154],[19, 153],[20, 154],[21, 153],[22, 155],[23, 150],[24, 152],[25, 149],[26, 150],[27, 152]])

export const dark_green_alt2 = n58
const n59 = t([[0, 148],[1, 149],[2, 150],[3, 152],[4, 46],[5, 153],[6, 154],[7, 155],[8, 0],[9, 155],[10, 155],[11, 155],[12, 149],[13, 150],[14, 152],[15, 46],[16, 148],[17, 147],[19, 46],[20, 153],[21, 46],[22, 154],[23, 152],[24, 46],[25, 150],[26, 152],[27, 150]])

export const dark_green_active = n59
const n60 = t([[0, 124],[1, 125],[2, 126],[3, 127],[4, 128],[5, 130],[6, 22],[7, 131],[8, 132],[9, 133],[10, 0],[11, 0],[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[18, 133],[19, 132],[20, 133],[21, 132],[22, 0],[23, 128],[24, 130],[25, 127],[26, 128],[27, 22]])

export const dark_blue_alt1 = n60
const n61 = t([[0, 125],[1, 126],[2, 127],[3, 128],[4, 130],[5, 22],[6, 131],[7, 132],[8, 133],[9, 0],[10, 0],[11, 0],[12, 126],[13, 127],[14, 128],[15, 130],[16, 125],[17, 124],[18, 132],[19, 131],[20, 132],[21, 131],[22, 133],[23, 128],[24, 130],[25, 127],[26, 128],[27, 130]])

export const dark_blue_alt2 = n61
const n62 = t([[0, 126],[1, 127],[2, 128],[3, 130],[4, 22],[5, 131],[6, 132],[7, 133],[8, 0],[9, 133],[10, 133],[11, 133],[12, 127],[13, 128],[14, 130],[15, 22],[16, 126],[17, 125],[19, 22],[20, 131],[21, 22],[22, 132],[23, 130],[24, 22],[25, 128],[26, 130],[27, 128]])

export const dark_blue_active = n62
const n63 = t([[0, 179],[1, 180],[2, 181],[3, 182],[4, 183],[5, 185],[6, 82],[7, 186],[8, 187],[9, 188],[10, 0],[11, 0],[12, 180],[13, 181],[14, 182],[15, 183],[16, 179],[17, 178],[18, 188],[19, 187],[20, 188],[21, 187],[22, 0],[23, 183],[24, 185],[25, 182],[26, 183],[27, 82]])

export const dark_purple_alt1 = n63
const n64 = t([[0, 180],[1, 181],[2, 182],[3, 183],[4, 185],[5, 82],[6, 186],[7, 187],[8, 188],[9, 0],[10, 0],[11, 0],[12, 181],[13, 182],[14, 183],[15, 185],[16, 180],[17, 179],[18, 187],[19, 186],[20, 187],[21, 186],[22, 188],[23, 183],[24, 185],[25, 182],[26, 183],[27, 185]])

export const dark_purple_alt2 = n64
const n65 = t([[0, 181],[1, 182],[2, 183],[3, 185],[4, 82],[5, 186],[6, 187],[7, 188],[8, 0],[9, 220],[10, 220],[11, 220],[12, 182],[13, 183],[14, 185],[15, 82],[16, 181],[17, 180],[19, 82],[20, 186],[21, 82],[22, 187],[23, 185],[24, 82],[25, 183],[26, 185],[27, 183]])

export const dark_purple_active = n65
const n66 = t([[0, 168],[1, 169],[2, 170],[3, 171],[4, 172],[5, 174],[6, 70],[7, 175],[8, 176],[9, 177],[10, 0],[11, 0],[12, 169],[13, 170],[14, 171],[15, 172],[16, 168],[17, 167],[18, 177],[19, 176],[20, 177],[21, 176],[22, 0],[23, 172],[24, 174],[25, 171],[26, 172],[27, 70]])

export const dark_pink_alt1 = n66
const n67 = t([[0, 169],[1, 170],[2, 171],[3, 172],[4, 174],[5, 70],[6, 175],[7, 176],[8, 177],[9, 0],[10, 0],[11, 0],[12, 170],[13, 171],[14, 172],[15, 174],[16, 169],[17, 168],[18, 176],[19, 175],[20, 176],[21, 175],[22, 177],[23, 172],[24, 174],[25, 171],[26, 172],[27, 174]])

export const dark_pink_alt2 = n67
const n68 = t([[0, 170],[1, 171],[2, 172],[3, 174],[4, 70],[5, 175],[6, 176],[7, 177],[8, 0],[9, 177],[10, 177],[11, 177],[12, 171],[13, 172],[14, 174],[15, 70],[16, 170],[17, 169],[19, 70],[20, 175],[21, 70],[22, 176],[23, 174],[24, 70],[25, 172],[26, 174],[27, 172]])

export const dark_pink_active = n68
const n69 = t([[0, 190],[1, 191],[2, 192],[3, 193],[4, 194],[5, 196],[6, 94],[7, 197],[8, 198],[9, 199],[10, 0],[11, 0],[12, 191],[13, 192],[14, 193],[15, 194],[16, 190],[17, 189],[18, 199],[19, 198],[20, 199],[21, 198],[22, 0],[23, 194],[24, 196],[25, 193],[26, 194],[27, 94]])

export const dark_red_alt1 = n69
const n70 = t([[0, 191],[1, 192],[2, 193],[3, 194],[4, 196],[5, 94],[6, 197],[7, 198],[8, 199],[9, 0],[10, 0],[11, 0],[12, 192],[13, 193],[14, 194],[15, 196],[16, 191],[17, 190],[18, 198],[19, 197],[20, 198],[21, 197],[22, 199],[23, 194],[24, 196],[25, 193],[26, 194],[27, 196]])

export const dark_red_alt2 = n70
const n71 = t([[0, 192],[1, 193],[2, 194],[3, 196],[4, 94],[5, 197],[6, 198],[7, 199],[8, 0],[9, 199],[10, 199],[11, 199],[12, 193],[13, 194],[14, 196],[15, 94],[16, 192],[17, 191],[19, 94],[20, 197],[21, 94],[22, 198],[23, 196],[24, 94],[25, 194],[26, 196],[27, 194]])

export const dark_red_active = n71
const n72 = t([[0, 135],[1, 136],[2, 137],[3, 137],[4, 138],[5, 140],[6, 141],[7, 142],[8, 143],[9, 144],[10, 0],[11, 0],[12, 136],[13, 137],[14, 137],[15, 138],[16, 135],[17, 134],[18, 144],[19, 143],[20, 144],[21, 143],[22, 0],[23, 138],[24, 140],[25, 137],[26, 138],[27, 141]])

export const dark_gray_alt1 = n72
const n73 = t([[0, 136],[1, 137],[2, 137],[3, 138],[4, 140],[5, 141],[6, 142],[7, 143],[8, 144],[9, 0],[10, 0],[11, 0],[12, 137],[13, 137],[14, 138],[15, 140],[16, 136],[17, 135],[18, 143],[19, 142],[20, 143],[21, 142],[22, 144],[23, 138],[24, 140],[25, 137],[26, 138],[27, 140]])

export const dark_gray_alt2 = n73
const n74 = t([[0, 137],[1, 137],[2, 138],[3, 140],[4, 141],[5, 142],[6, 143],[7, 144],[8, 0],[9, 144],[10, 144],[11, 144],[12, 137],[13, 138],[14, 140],[15, 141],[16, 137],[17, 136],[19, 141],[20, 142],[21, 141],[22, 143],[23, 140],[24, 141],[25, 138],[26, 140],[27, 138]])

export const dark_gray_active = n74
const n75 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]])

export const light_ListItem = n75
const n76 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]])

export const light_Card = n76
export const light_DrawerFrame = n76
export const light_Progress = n76
export const light_TooltipArrow = n76
const n77 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]])

export const light_Button = n77
export const light_Switch = n77
export const light_TooltipContent = n77
export const light_SliderTrack = n77
const n78 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]])

export const light_Checkbox = n78
export const light_RadioGroupItem = n78
export const light_Input = n78
export const light_TextArea = n78
const n79 = t([[12, 11],[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]])

export const light_SwitchThumb = n79
const n80 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]])

export const light_SliderTrackActive = n80
const n81 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 13],[18, 0],[19, 1],[20, 0],[21, 1],[22, 12],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]])

export const light_SliderThumb = n81
export const light_Tooltip = n81
export const light_ProgressIndicator = n81
const n82 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 13],[18, 0],[19, 122],[20, 0],[21, 122],[22, 12],[23, 116],[24, 117],[25, 115],[26, 116],[27, 120]])

export const dark_ListItem = n82
const n83 = t([[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[18, 0],[19, 122],[20, 0],[21, 122],[22, 0],[23, 117],[24, 118],[25, 116],[26, 117],[27, 119]])

export const dark_Card = n83
export const dark_DrawerFrame = n83
export const dark_Progress = n83
export const dark_TooltipArrow = n83
const n84 = t([[12, 115],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 0],[19, 122],[20, 0],[21, 122],[22, 122],[23, 117],[24, 118],[25, 116],[26, 117],[27, 118]])

export const dark_Button = n84
export const dark_Switch = n84
export const dark_TooltipContent = n84
export const dark_SliderTrack = n84
const n85 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 13],[18, 0],[19, 122],[20, 0],[21, 122],[22, 12],[23, 118],[24, 119],[25, 117],[26, 118],[27, 120]])

export const dark_Checkbox = n85
export const dark_RadioGroupItem = n85
export const dark_Input = n85
export const dark_TextArea = n85
const n86 = t([[12, 0],[13, 0],[14, 122],[15, 121],[16, 0],[17, 0],[18, 112],[19, 113],[20, 112],[21, 113],[22, 112],[23, 121],[24, 120],[25, 122],[26, 121],[27, 113]])

export const dark_SwitchThumb = n86
const n87 = t([[12, 120],[13, 119],[14, 118],[15, 117],[16, 121],[17, 122],[18, 112],[19, 113],[20, 112],[21, 113],[22, 113],[23, 117],[24, 116],[25, 118],[26, 117],[27, 117]])

export const dark_SliderTrackActive = n87
const n88 = t([[12, 122],[13, 121],[14, 120],[15, 119],[16, 0],[17, 12],[18, 112],[19, 113],[20, 112],[21, 113],[22, 13],[23, 119],[24, 118],[25, 120],[26, 119],[27, 115]])

export const dark_SliderThumb = n88
export const dark_Tooltip = n88
export const dark_ProgressIndicator = n88
const n89 = t([[12, 51],[13, 52],[14, 53],[15, 54],[16, 50],[17, 213],[18, 11],[19, 61],[20, 11],[21, 61],[22, 214],[23, 53],[24, 54],[25, 53],[26, 53],[27, 59]])

export const light_orange_ListItem = n89
const n90 = t([[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 50],[18, 11],[19, 61],[20, 11],[21, 61],[22, 11],[23, 54],[24, 55],[25, 54],[26, 54],[27, 58]])

export const light_orange_Card = n90
export const light_orange_DrawerFrame = n90
export const light_orange_Progress = n90
export const light_orange_TooltipArrow = n90
const n91 = t([[12, 53],[13, 54],[14, 55],[15, 57],[16, 52],[17, 51],[18, 11],[19, 61],[20, 11],[21, 61],[22, 61],[23, 54],[24, 55],[25, 54],[26, 54],[27, 57]])

export const light_orange_Button = n91
export const light_orange_Switch = n91
export const light_orange_TooltipContent = n91
export const light_orange_SliderTrack = n91
const n92 = t([[12, 51],[13, 52],[14, 53],[15, 54],[16, 50],[17, 213],[18, 11],[19, 61],[20, 11],[21, 61],[22, 214],[23, 55],[24, 57],[25, 55],[26, 55],[27, 59]])

export const light_orange_Checkbox = n92
export const light_orange_RadioGroupItem = n92
export const light_orange_Input = n92
export const light_orange_TextArea = n92
const n93 = t([[12, 11],[13, 11],[14, 61],[15, 60],[16, 11],[17, 11],[18, 50],[19, 51],[20, 50],[21, 51],[22, 50],[23, 61],[24, 60],[25, 61],[26, 61],[27, 51]])

export const light_orange_SwitchThumb = n93
const n94 = t([[12, 59],[13, 58],[14, 57],[15, 55],[16, 60],[17, 61],[18, 50],[19, 51],[20, 50],[21, 51],[22, 51],[23, 57],[24, 55],[25, 57],[26, 57],[27, 55]])

export const light_orange_SliderTrackActive = n94
const n95 = t([[12, 61],[13, 60],[14, 59],[15, 58],[16, 11],[17, 214],[18, 50],[19, 51],[20, 50],[21, 51],[22, 213],[23, 59],[24, 58],[25, 59],[26, 59],[27, 53]])

export const light_orange_SliderThumb = n95
export const light_orange_Tooltip = n95
export const light_orange_ProgressIndicator = n95
const n96 = t([[12, 99],[13, 100],[14, 101],[15, 102],[16, 98],[17, 98],[18, 11],[19, 109],[20, 11],[21, 109],[22, 109],[23, 101],[24, 102],[25, 101],[26, 101],[27, 107]])

export const light_yellow_ListItem = n96
const n97 = t([[12, 100],[13, 101],[14, 102],[15, 103],[16, 99],[17, 98],[18, 11],[19, 109],[20, 11],[21, 109],[22, 11],[23, 102],[24, 103],[25, 102],[26, 102],[27, 106]])

export const light_yellow_Card = n97
export const light_yellow_DrawerFrame = n97
export const light_yellow_Progress = n97
export const light_yellow_TooltipArrow = n97
const n98 = t([[12, 101],[13, 102],[14, 103],[15, 105],[16, 100],[17, 99],[18, 11],[19, 109],[20, 11],[21, 109],[22, 109],[23, 102],[24, 103],[25, 102],[26, 102],[27, 105]])

export const light_yellow_Button = n98
export const light_yellow_Switch = n98
export const light_yellow_TooltipContent = n98
export const light_yellow_SliderTrack = n98
const n99 = t([[12, 99],[13, 100],[14, 101],[15, 102],[16, 98],[17, 98],[18, 11],[19, 109],[20, 11],[21, 109],[22, 109],[23, 103],[24, 105],[25, 103],[26, 103],[27, 107]])

export const light_yellow_Checkbox = n99
export const light_yellow_RadioGroupItem = n99
export const light_yellow_Input = n99
export const light_yellow_TextArea = n99
const n100 = t([[12, 11],[13, 11],[14, 109],[15, 108],[16, 11],[17, 11],[18, 98],[19, 99],[20, 98],[21, 99],[22, 98],[23, 109],[24, 108],[25, 109],[26, 109],[27, 99]])

export const light_yellow_SwitchThumb = n100
const n101 = t([[12, 107],[13, 106],[14, 105],[15, 103],[16, 108],[17, 109],[18, 98],[19, 99],[20, 98],[21, 99],[22, 99],[23, 105],[24, 103],[25, 105],[26, 105],[27, 103]])

export const light_yellow_SliderTrackActive = n101
const n102 = t([[12, 109],[13, 108],[14, 107],[15, 106],[16, 11],[17, 109],[18, 98],[19, 99],[20, 98],[21, 99],[22, 98],[23, 107],[24, 106],[25, 107],[26, 107],[27, 101]])

export const light_yellow_SliderThumb = n102
export const light_yellow_Tooltip = n102
export const light_yellow_ProgressIndicator = n102
const n103 = t([[12, 39],[13, 40],[14, 41],[15, 42],[16, 38],[17, 38],[18, 11],[19, 49],[20, 11],[21, 49],[22, 49],[23, 41],[24, 42],[25, 41],[26, 41],[27, 47]])

export const light_green_ListItem = n103
const n104 = t([[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 11],[19, 49],[20, 11],[21, 49],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 46]])

export const light_green_Card = n104
export const light_green_DrawerFrame = n104
export const light_green_Progress = n104
export const light_green_TooltipArrow = n104
const n105 = t([[12, 41],[13, 42],[14, 43],[15, 45],[16, 40],[17, 39],[18, 11],[19, 49],[20, 11],[21, 49],[22, 49],[23, 42],[24, 43],[25, 42],[26, 42],[27, 45]])

export const light_green_Button = n105
export const light_green_Switch = n105
export const light_green_TooltipContent = n105
export const light_green_SliderTrack = n105
const n106 = t([[12, 39],[13, 40],[14, 41],[15, 42],[16, 38],[17, 38],[18, 11],[19, 49],[20, 11],[21, 49],[22, 49],[23, 43],[24, 45],[25, 43],[26, 43],[27, 47]])

export const light_green_Checkbox = n106
export const light_green_RadioGroupItem = n106
export const light_green_Input = n106
export const light_green_TextArea = n106
const n107 = t([[12, 11],[13, 11],[14, 49],[15, 48],[16, 11],[17, 11],[18, 38],[19, 39],[20, 38],[21, 39],[22, 38],[23, 49],[24, 48],[25, 49],[26, 49],[27, 39]])

export const light_green_SwitchThumb = n107
const n108 = t([[12, 47],[13, 46],[14, 45],[15, 43],[16, 48],[17, 49],[18, 38],[19, 39],[20, 38],[21, 39],[22, 39],[23, 45],[24, 43],[25, 45],[26, 45],[27, 43]])

export const light_green_SliderTrackActive = n108
const n109 = t([[12, 49],[13, 48],[14, 47],[15, 46],[16, 11],[17, 49],[18, 38],[19, 39],[20, 38],[21, 39],[22, 38],[23, 47],[24, 46],[25, 47],[26, 47],[27, 41]])

export const light_green_SliderThumb = n109
export const light_green_Tooltip = n109
export const light_green_ProgressIndicator = n109
const n110 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]])

export const light_blue_ListItem = n110
const n111 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]])

export const light_blue_Card = n111
export const light_blue_DrawerFrame = n111
export const light_blue_Progress = n111
export const light_blue_TooltipArrow = n111
const n112 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]])

export const light_blue_Button = n112
export const light_blue_Switch = n112
export const light_blue_TooltipContent = n112
export const light_blue_SliderTrack = n112
const n113 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 23]])

export const light_blue_Checkbox = n113
export const light_blue_RadioGroupItem = n113
export const light_blue_Input = n113
export const light_blue_TextArea = n113
const n114 = t([[12, 11],[13, 11],[14, 25],[15, 24],[16, 11],[17, 11],[18, 14],[19, 15],[20, 14],[21, 15],[22, 14],[23, 25],[24, 24],[25, 25],[26, 25],[27, 15]])

export const light_blue_SwitchThumb = n114
const n115 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 14],[19, 15],[20, 14],[21, 15],[22, 15],[23, 21],[24, 19],[25, 21],[26, 21],[27, 19]])

export const light_blue_SliderTrackActive = n115
const n116 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 25],[18, 14],[19, 15],[20, 14],[21, 15],[22, 14],[23, 23],[24, 22],[25, 23],[26, 23],[27, 17]])

export const light_blue_SliderThumb = n116
export const light_blue_Tooltip = n116
export const light_blue_ProgressIndicator = n116
const n117 = t([[12, 75],[13, 76],[14, 77],[15, 78],[16, 74],[17, 215],[18, 11],[19, 85],[20, 11],[21, 85],[22, 216],[23, 77],[24, 78],[25, 77],[26, 77],[27, 83]])

export const light_purple_ListItem = n117
const n118 = t([[12, 76],[13, 77],[14, 78],[15, 79],[16, 75],[17, 74],[18, 11],[19, 85],[20, 11],[21, 85],[22, 11],[23, 78],[24, 79],[25, 78],[26, 78],[27, 82]])

export const light_purple_Card = n118
export const light_purple_DrawerFrame = n118
export const light_purple_Progress = n118
export const light_purple_TooltipArrow = n118
const n119 = t([[12, 77],[13, 78],[14, 79],[15, 81],[16, 76],[17, 75],[18, 11],[19, 85],[20, 11],[21, 85],[22, 85],[23, 78],[24, 79],[25, 78],[26, 78],[27, 81]])

export const light_purple_Button = n119
export const light_purple_Switch = n119
export const light_purple_TooltipContent = n119
export const light_purple_SliderTrack = n119
const n120 = t([[12, 75],[13, 76],[14, 77],[15, 78],[16, 74],[17, 215],[18, 11],[19, 85],[20, 11],[21, 85],[22, 216],[23, 79],[24, 81],[25, 79],[26, 79],[27, 83]])

export const light_purple_Checkbox = n120
export const light_purple_RadioGroupItem = n120
export const light_purple_Input = n120
export const light_purple_TextArea = n120
const n121 = t([[12, 11],[13, 11],[14, 85],[15, 84],[16, 11],[17, 11],[18, 74],[19, 75],[20, 74],[21, 75],[22, 74],[23, 85],[24, 84],[25, 85],[26, 85],[27, 75]])

export const light_purple_SwitchThumb = n121
const n122 = t([[12, 83],[13, 82],[14, 81],[15, 79],[16, 84],[17, 85],[18, 74],[19, 75],[20, 74],[21, 75],[22, 75],[23, 81],[24, 79],[25, 81],[26, 81],[27, 79]])

export const light_purple_SliderTrackActive = n122
const n123 = t([[12, 85],[13, 84],[14, 83],[15, 82],[16, 11],[17, 216],[18, 74],[19, 75],[20, 74],[21, 75],[22, 215],[23, 83],[24, 82],[25, 83],[26, 83],[27, 77]])

export const light_purple_SliderThumb = n123
export const light_purple_Tooltip = n123
export const light_purple_ProgressIndicator = n123
const n124 = t([[12, 63],[13, 64],[14, 65],[15, 66],[16, 62],[17, 62],[18, 11],[19, 73],[20, 11],[21, 73],[22, 73],[23, 65],[24, 66],[25, 65],[26, 65],[27, 71]])

export const light_pink_ListItem = n124
const n125 = t([[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 62],[18, 11],[19, 73],[20, 11],[21, 73],[22, 11],[23, 66],[24, 67],[25, 66],[26, 66],[27, 70]])

export const light_pink_Card = n125
export const light_pink_DrawerFrame = n125
export const light_pink_Progress = n125
export const light_pink_TooltipArrow = n125
const n126 = t([[12, 65],[13, 66],[14, 67],[15, 69],[16, 64],[17, 63],[18, 11],[19, 73],[20, 11],[21, 73],[22, 73],[23, 66],[24, 67],[25, 66],[26, 66],[27, 69]])

export const light_pink_Button = n126
export const light_pink_Switch = n126
export const light_pink_TooltipContent = n126
export const light_pink_SliderTrack = n126
const n127 = t([[12, 63],[13, 64],[14, 65],[15, 66],[16, 62],[17, 62],[18, 11],[19, 73],[20, 11],[21, 73],[22, 73],[23, 67],[24, 69],[25, 67],[26, 67],[27, 71]])

export const light_pink_Checkbox = n127
export const light_pink_RadioGroupItem = n127
export const light_pink_Input = n127
export const light_pink_TextArea = n127
const n128 = t([[12, 11],[13, 11],[14, 73],[15, 72],[16, 11],[17, 11],[18, 62],[19, 63],[20, 62],[21, 63],[22, 62],[23, 73],[24, 72],[25, 73],[26, 73],[27, 63]])

export const light_pink_SwitchThumb = n128
const n129 = t([[12, 71],[13, 70],[14, 69],[15, 67],[16, 72],[17, 73],[18, 62],[19, 63],[20, 62],[21, 63],[22, 63],[23, 69],[24, 67],[25, 69],[26, 69],[27, 67]])

export const light_pink_SliderTrackActive = n129
const n130 = t([[12, 73],[13, 72],[14, 71],[15, 70],[16, 11],[17, 73],[18, 62],[19, 63],[20, 62],[21, 63],[22, 62],[23, 71],[24, 70],[25, 71],[26, 71],[27, 65]])

export const light_pink_SliderThumb = n130
export const light_pink_Tooltip = n130
export const light_pink_ProgressIndicator = n130
const n131 = t([[12, 87],[13, 88],[14, 89],[15, 90],[16, 86],[17, 86],[18, 11],[19, 97],[20, 11],[21, 97],[22, 97],[23, 89],[24, 90],[25, 89],[26, 89],[27, 95]])

export const light_red_ListItem = n131
const n132 = t([[12, 88],[13, 89],[14, 90],[15, 91],[16, 87],[17, 86],[18, 11],[19, 97],[20, 11],[21, 97],[22, 11],[23, 90],[24, 91],[25, 90],[26, 90],[27, 94]])

export const light_red_Card = n132
export const light_red_DrawerFrame = n132
export const light_red_Progress = n132
export const light_red_TooltipArrow = n132
const n133 = t([[12, 89],[13, 90],[14, 91],[15, 93],[16, 88],[17, 87],[18, 11],[19, 97],[20, 11],[21, 97],[22, 97],[23, 90],[24, 91],[25, 90],[26, 90],[27, 93]])

export const light_red_Button = n133
export const light_red_Switch = n133
export const light_red_TooltipContent = n133
export const light_red_SliderTrack = n133
const n134 = t([[12, 87],[13, 88],[14, 89],[15, 90],[16, 86],[17, 86],[18, 11],[19, 97],[20, 11],[21, 97],[22, 97],[23, 91],[24, 93],[25, 91],[26, 91],[27, 95]])

export const light_red_Checkbox = n134
export const light_red_RadioGroupItem = n134
export const light_red_Input = n134
export const light_red_TextArea = n134
const n135 = t([[12, 11],[13, 11],[14, 97],[15, 96],[16, 11],[17, 11],[18, 86],[19, 87],[20, 86],[21, 87],[22, 86],[23, 97],[24, 96],[25, 97],[26, 97],[27, 87]])

export const light_red_SwitchThumb = n135
const n136 = t([[12, 95],[13, 94],[14, 93],[15, 91],[16, 96],[17, 97],[18, 86],[19, 87],[20, 86],[21, 87],[22, 87],[23, 93],[24, 91],[25, 93],[26, 93],[27, 91]])

export const light_red_SliderTrackActive = n136
const n137 = t([[12, 97],[13, 96],[14, 95],[15, 94],[16, 11],[17, 97],[18, 86],[19, 87],[20, 86],[21, 87],[22, 86],[23, 95],[24, 94],[25, 95],[26, 95],[27, 89]])

export const light_red_SliderThumb = n137
export const light_red_Tooltip = n137
export const light_red_ProgressIndicator = n137
const n138 = t([[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 26],[18, 11],[19, 37],[20, 11],[21, 37],[22, 37],[23, 29],[24, 30],[25, 29],[26, 29],[27, 35]])

export const light_gray_ListItem = n138
const n139 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 11],[19, 37],[20, 11],[21, 37],[22, 11],[23, 30],[24, 31],[25, 30],[26, 30],[27, 34]])

export const light_gray_Card = n139
export const light_gray_DrawerFrame = n139
export const light_gray_Progress = n139
export const light_gray_TooltipArrow = n139
const n140 = t([[12, 29],[13, 30],[14, 31],[15, 33],[16, 28],[17, 27],[18, 11],[19, 37],[20, 11],[21, 37],[22, 37],[23, 30],[24, 31],[25, 30],[26, 30],[27, 33]])

export const light_gray_Button = n140
export const light_gray_Switch = n140
export const light_gray_TooltipContent = n140
export const light_gray_SliderTrack = n140
const n141 = t([[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 26],[18, 11],[19, 37],[20, 11],[21, 37],[22, 37],[23, 31],[24, 33],[25, 31],[26, 31],[27, 35]])

export const light_gray_Checkbox = n141
export const light_gray_RadioGroupItem = n141
export const light_gray_Input = n141
export const light_gray_TextArea = n141
const n142 = t([[12, 11],[13, 11],[14, 37],[15, 36],[16, 11],[17, 11],[18, 26],[19, 27],[20, 26],[21, 27],[22, 26],[23, 37],[24, 36],[25, 37],[26, 37],[27, 27]])

export const light_gray_SwitchThumb = n142
const n143 = t([[12, 35],[13, 34],[14, 33],[15, 31],[16, 36],[17, 37],[18, 26],[19, 27],[20, 26],[21, 27],[22, 27],[23, 33],[24, 31],[25, 33],[26, 33],[27, 31]])

export const light_gray_SliderTrackActive = n143
const n144 = t([[12, 37],[13, 36],[14, 35],[15, 34],[16, 11],[17, 37],[18, 26],[19, 27],[20, 26],[21, 27],[22, 26],[23, 35],[24, 34],[25, 35],[26, 35],[27, 29]])

export const light_gray_SliderThumb = n144
export const light_gray_Tooltip = n144
export const light_gray_ProgressIndicator = n144
const n145 = t([[12, 157],[13, 158],[14, 159],[15, 160],[16, 156],[17, 217],[18, 0],[19, 166],[20, 0],[21, 166],[22, 218],[23, 160],[24, 161],[25, 159],[26, 160],[27, 164]])

export const dark_orange_ListItem = n145
const n146 = t([[12, 158],[13, 159],[14, 160],[15, 161],[16, 157],[17, 156],[18, 0],[19, 166],[20, 0],[21, 166],[22, 0],[23, 161],[24, 163],[25, 160],[26, 161],[27, 58]])

export const dark_orange_Card = n146
export const dark_orange_DrawerFrame = n146
export const dark_orange_Progress = n146
export const dark_orange_TooltipArrow = n146
const n147 = t([[12, 159],[13, 160],[14, 161],[15, 163],[16, 158],[17, 157],[18, 0],[19, 166],[20, 0],[21, 166],[22, 166],[23, 161],[24, 163],[25, 160],[26, 161],[27, 163]])

export const dark_orange_Button = n147
export const dark_orange_Switch = n147
export const dark_orange_TooltipContent = n147
export const dark_orange_SliderTrack = n147
const n148 = t([[12, 157],[13, 158],[14, 159],[15, 160],[16, 156],[17, 217],[18, 0],[19, 166],[20, 0],[21, 166],[22, 218],[23, 163],[24, 58],[25, 161],[26, 163],[27, 164]])

export const dark_orange_Checkbox = n148
export const dark_orange_RadioGroupItem = n148
export const dark_orange_Input = n148
export const dark_orange_TextArea = n148
const n149 = t([[12, 0],[13, 0],[14, 166],[15, 165],[16, 0],[17, 0],[18, 156],[19, 157],[20, 156],[21, 157],[22, 156],[23, 165],[24, 164],[25, 166],[26, 165],[27, 157]])

export const dark_orange_SwitchThumb = n149
const n150 = t([[12, 164],[13, 58],[14, 163],[15, 161],[16, 165],[17, 166],[18, 156],[19, 157],[20, 156],[21, 157],[22, 157],[23, 161],[24, 160],[25, 163],[26, 161],[27, 161]])

export const dark_orange_SliderTrackActive = n150
const n151 = t([[12, 166],[13, 165],[14, 164],[15, 58],[16, 0],[17, 218],[18, 156],[19, 157],[20, 156],[21, 157],[22, 217],[23, 58],[24, 163],[25, 164],[26, 58],[27, 159]])

export const dark_orange_SliderThumb = n151
export const dark_orange_Tooltip = n151
export const dark_orange_ProgressIndicator = n151
const n152 = t([[12, 201],[13, 202],[14, 203],[15, 204],[16, 200],[17, 200],[18, 0],[19, 210],[20, 0],[21, 210],[22, 210],[23, 204],[24, 205],[25, 203],[26, 204],[27, 208]])

export const dark_yellow_ListItem = n152
const n153 = t([[12, 202],[13, 203],[14, 204],[15, 205],[16, 201],[17, 200],[18, 0],[19, 210],[20, 0],[21, 210],[22, 0],[23, 205],[24, 207],[25, 204],[26, 205],[27, 106]])

export const dark_yellow_Card = n153
export const dark_yellow_DrawerFrame = n153
export const dark_yellow_Progress = n153
export const dark_yellow_TooltipArrow = n153
const n154 = t([[12, 203],[13, 204],[14, 205],[15, 207],[16, 202],[17, 201],[18, 0],[19, 210],[20, 0],[21, 210],[22, 210],[23, 205],[24, 207],[25, 204],[26, 205],[27, 207]])

export const dark_yellow_Button = n154
export const dark_yellow_Switch = n154
export const dark_yellow_TooltipContent = n154
export const dark_yellow_SliderTrack = n154
const n155 = t([[12, 201],[13, 202],[14, 203],[15, 204],[16, 200],[17, 200],[18, 0],[19, 210],[20, 0],[21, 210],[22, 210],[23, 207],[24, 106],[25, 205],[26, 207],[27, 208]])

export const dark_yellow_Checkbox = n155
export const dark_yellow_RadioGroupItem = n155
export const dark_yellow_Input = n155
export const dark_yellow_TextArea = n155
const n156 = t([[12, 0],[13, 0],[14, 210],[15, 209],[16, 0],[17, 0],[18, 200],[19, 201],[20, 200],[21, 201],[22, 200],[23, 209],[24, 208],[25, 210],[26, 209],[27, 201]])

export const dark_yellow_SwitchThumb = n156
const n157 = t([[12, 208],[13, 106],[14, 207],[15, 205],[16, 209],[17, 210],[18, 200],[19, 201],[20, 200],[21, 201],[22, 201],[23, 205],[24, 204],[25, 207],[26, 205],[27, 205]])

export const dark_yellow_SliderTrackActive = n157
const n158 = t([[12, 210],[13, 209],[14, 208],[15, 106],[16, 0],[17, 210],[18, 200],[19, 201],[20, 200],[21, 201],[22, 200],[23, 106],[24, 207],[25, 208],[26, 106],[27, 203]])

export const dark_yellow_SliderThumb = n158
export const dark_yellow_Tooltip = n158
export const dark_yellow_ProgressIndicator = n158
const n159 = t([[12, 146],[13, 147],[14, 148],[15, 149],[16, 145],[17, 145],[18, 0],[19, 155],[20, 0],[21, 155],[22, 155],[23, 149],[24, 150],[25, 148],[26, 149],[27, 153]])

export const dark_green_ListItem = n159
const n160 = t([[12, 147],[13, 148],[14, 149],[15, 150],[16, 146],[17, 145],[18, 0],[19, 155],[20, 0],[21, 155],[22, 0],[23, 150],[24, 152],[25, 149],[26, 150],[27, 46]])

export const dark_green_Card = n160
export const dark_green_DrawerFrame = n160
export const dark_green_Progress = n160
export const dark_green_TooltipArrow = n160
const n161 = t([[12, 148],[13, 149],[14, 150],[15, 152],[16, 147],[17, 146],[18, 0],[19, 155],[20, 0],[21, 155],[22, 155],[23, 150],[24, 152],[25, 149],[26, 150],[27, 152]])

export const dark_green_Button = n161
export const dark_green_Switch = n161
export const dark_green_TooltipContent = n161
export const dark_green_SliderTrack = n161
const n162 = t([[12, 146],[13, 147],[14, 148],[15, 149],[16, 145],[17, 145],[18, 0],[19, 155],[20, 0],[21, 155],[22, 155],[23, 152],[24, 46],[25, 150],[26, 152],[27, 153]])

export const dark_green_Checkbox = n162
export const dark_green_RadioGroupItem = n162
export const dark_green_Input = n162
export const dark_green_TextArea = n162
const n163 = t([[12, 0],[13, 0],[14, 155],[15, 154],[16, 0],[17, 0],[18, 145],[19, 146],[20, 145],[21, 146],[22, 145],[23, 154],[24, 153],[25, 155],[26, 154],[27, 146]])

export const dark_green_SwitchThumb = n163
const n164 = t([[12, 153],[13, 46],[14, 152],[15, 150],[16, 154],[17, 155],[18, 145],[19, 146],[20, 145],[21, 146],[22, 146],[23, 150],[24, 149],[25, 152],[26, 150],[27, 150]])

export const dark_green_SliderTrackActive = n164
const n165 = t([[12, 155],[13, 154],[14, 153],[15, 46],[16, 0],[17, 155],[18, 145],[19, 146],[20, 145],[21, 146],[22, 145],[23, 46],[24, 152],[25, 153],[26, 46],[27, 148]])

export const dark_green_SliderThumb = n165
export const dark_green_Tooltip = n165
export const dark_green_ProgressIndicator = n165
const n166 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 123],[18, 0],[19, 133],[20, 0],[21, 133],[22, 133],[23, 127],[24, 128],[25, 126],[26, 127],[27, 131]])

export const dark_blue_ListItem = n166
const n167 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[18, 0],[19, 133],[20, 0],[21, 133],[22, 0],[23, 128],[24, 130],[25, 127],[26, 128],[27, 22]])

export const dark_blue_Card = n167
export const dark_blue_DrawerFrame = n167
export const dark_blue_Progress = n167
export const dark_blue_TooltipArrow = n167
const n168 = t([[12, 126],[13, 127],[14, 128],[15, 130],[16, 125],[17, 124],[18, 0],[19, 133],[20, 0],[21, 133],[22, 133],[23, 128],[24, 130],[25, 127],[26, 128],[27, 130]])

export const dark_blue_Button = n168
export const dark_blue_Switch = n168
export const dark_blue_TooltipContent = n168
export const dark_blue_SliderTrack = n168
const n169 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 123],[18, 0],[19, 133],[20, 0],[21, 133],[22, 133],[23, 130],[24, 22],[25, 128],[26, 130],[27, 131]])

export const dark_blue_Checkbox = n169
export const dark_blue_RadioGroupItem = n169
export const dark_blue_Input = n169
export const dark_blue_TextArea = n169
const n170 = t([[12, 0],[13, 0],[14, 133],[15, 132],[16, 0],[17, 0],[18, 123],[19, 124],[20, 123],[21, 124],[22, 123],[23, 132],[24, 131],[25, 133],[26, 132],[27, 124]])

export const dark_blue_SwitchThumb = n170
const n171 = t([[12, 131],[13, 22],[14, 130],[15, 128],[16, 132],[17, 133],[18, 123],[19, 124],[20, 123],[21, 124],[22, 124],[23, 128],[24, 127],[25, 130],[26, 128],[27, 128]])

export const dark_blue_SliderTrackActive = n171
const n172 = t([[12, 133],[13, 132],[14, 131],[15, 22],[16, 0],[17, 133],[18, 123],[19, 124],[20, 123],[21, 124],[22, 123],[23, 22],[24, 130],[25, 131],[26, 22],[27, 126]])

export const dark_blue_SliderThumb = n172
export const dark_blue_Tooltip = n172
export const dark_blue_ProgressIndicator = n172
const n173 = t([[12, 179],[13, 180],[14, 181],[15, 182],[16, 178],[17, 219],[18, 0],[19, 188],[20, 0],[21, 188],[22, 220],[23, 182],[24, 183],[25, 181],[26, 182],[27, 186]])

export const dark_purple_ListItem = n173
const n174 = t([[12, 180],[13, 181],[14, 182],[15, 183],[16, 179],[17, 178],[18, 0],[19, 188],[20, 0],[21, 188],[22, 0],[23, 183],[24, 185],[25, 182],[26, 183],[27, 82]])

export const dark_purple_Card = n174
export const dark_purple_DrawerFrame = n174
export const dark_purple_Progress = n174
export const dark_purple_TooltipArrow = n174
const n175 = t([[12, 181],[13, 182],[14, 183],[15, 185],[16, 180],[17, 179],[18, 0],[19, 188],[20, 0],[21, 188],[22, 188],[23, 183],[24, 185],[25, 182],[26, 183],[27, 185]])

export const dark_purple_Button = n175
export const dark_purple_Switch = n175
export const dark_purple_TooltipContent = n175
export const dark_purple_SliderTrack = n175
const n176 = t([[12, 179],[13, 180],[14, 181],[15, 182],[16, 178],[17, 219],[18, 0],[19, 188],[20, 0],[21, 188],[22, 220],[23, 185],[24, 82],[25, 183],[26, 185],[27, 186]])

export const dark_purple_Checkbox = n176
export const dark_purple_RadioGroupItem = n176
export const dark_purple_Input = n176
export const dark_purple_TextArea = n176
const n177 = t([[12, 0],[13, 0],[14, 188],[15, 187],[16, 0],[17, 0],[18, 178],[19, 179],[20, 178],[21, 179],[22, 178],[23, 187],[24, 186],[25, 188],[26, 187],[27, 179]])

export const dark_purple_SwitchThumb = n177
const n178 = t([[12, 186],[13, 82],[14, 185],[15, 183],[16, 187],[17, 188],[18, 178],[19, 179],[20, 178],[21, 179],[22, 179],[23, 183],[24, 182],[25, 185],[26, 183],[27, 183]])

export const dark_purple_SliderTrackActive = n178
const n179 = t([[12, 188],[13, 187],[14, 186],[15, 82],[16, 0],[17, 220],[18, 178],[19, 179],[20, 178],[21, 179],[22, 219],[23, 82],[24, 185],[25, 186],[26, 82],[27, 181]])

export const dark_purple_SliderThumb = n179
export const dark_purple_Tooltip = n179
export const dark_purple_ProgressIndicator = n179
const n180 = t([[12, 168],[13, 169],[14, 170],[15, 171],[16, 167],[17, 167],[18, 0],[19, 177],[20, 0],[21, 177],[22, 177],[23, 171],[24, 172],[25, 170],[26, 171],[27, 175]])

export const dark_pink_ListItem = n180
const n181 = t([[12, 169],[13, 170],[14, 171],[15, 172],[16, 168],[17, 167],[18, 0],[19, 177],[20, 0],[21, 177],[22, 0],[23, 172],[24, 174],[25, 171],[26, 172],[27, 70]])

export const dark_pink_Card = n181
export const dark_pink_DrawerFrame = n181
export const dark_pink_Progress = n181
export const dark_pink_TooltipArrow = n181
const n182 = t([[12, 170],[13, 171],[14, 172],[15, 174],[16, 169],[17, 168],[18, 0],[19, 177],[20, 0],[21, 177],[22, 177],[23, 172],[24, 174],[25, 171],[26, 172],[27, 174]])

export const dark_pink_Button = n182
export const dark_pink_Switch = n182
export const dark_pink_TooltipContent = n182
export const dark_pink_SliderTrack = n182
const n183 = t([[12, 168],[13, 169],[14, 170],[15, 171],[16, 167],[17, 167],[18, 0],[19, 177],[20, 0],[21, 177],[22, 177],[23, 174],[24, 70],[25, 172],[26, 174],[27, 175]])

export const dark_pink_Checkbox = n183
export const dark_pink_RadioGroupItem = n183
export const dark_pink_Input = n183
export const dark_pink_TextArea = n183
const n184 = t([[12, 0],[13, 0],[14, 177],[15, 176],[16, 0],[17, 0],[18, 167],[19, 168],[20, 167],[21, 168],[22, 167],[23, 176],[24, 175],[25, 177],[26, 176],[27, 168]])

export const dark_pink_SwitchThumb = n184
const n185 = t([[12, 175],[13, 70],[14, 174],[15, 172],[16, 176],[17, 177],[18, 167],[19, 168],[20, 167],[21, 168],[22, 168],[23, 172],[24, 171],[25, 174],[26, 172],[27, 172]])

export const dark_pink_SliderTrackActive = n185
const n186 = t([[12, 177],[13, 176],[14, 175],[15, 70],[16, 0],[17, 177],[18, 167],[19, 168],[20, 167],[21, 168],[22, 167],[23, 70],[24, 174],[25, 175],[26, 70],[27, 170]])

export const dark_pink_SliderThumb = n186
export const dark_pink_Tooltip = n186
export const dark_pink_ProgressIndicator = n186
const n187 = t([[12, 190],[13, 191],[14, 192],[15, 193],[16, 189],[17, 189],[18, 0],[19, 199],[20, 0],[21, 199],[22, 199],[23, 193],[24, 194],[25, 192],[26, 193],[27, 197]])

export const dark_red_ListItem = n187
const n188 = t([[12, 191],[13, 192],[14, 193],[15, 194],[16, 190],[17, 189],[18, 0],[19, 199],[20, 0],[21, 199],[22, 0],[23, 194],[24, 196],[25, 193],[26, 194],[27, 94]])

export const dark_red_Card = n188
export const dark_red_DrawerFrame = n188
export const dark_red_Progress = n188
export const dark_red_TooltipArrow = n188
const n189 = t([[12, 192],[13, 193],[14, 194],[15, 196],[16, 191],[17, 190],[18, 0],[19, 199],[20, 0],[21, 199],[22, 199],[23, 194],[24, 196],[25, 193],[26, 194],[27, 196]])

export const dark_red_Button = n189
export const dark_red_Switch = n189
export const dark_red_TooltipContent = n189
export const dark_red_SliderTrack = n189
const n190 = t([[12, 190],[13, 191],[14, 192],[15, 193],[16, 189],[17, 189],[18, 0],[19, 199],[20, 0],[21, 199],[22, 199],[23, 196],[24, 94],[25, 194],[26, 196],[27, 197]])

export const dark_red_Checkbox = n190
export const dark_red_RadioGroupItem = n190
export const dark_red_Input = n190
export const dark_red_TextArea = n190
const n191 = t([[12, 0],[13, 0],[14, 199],[15, 198],[16, 0],[17, 0],[18, 189],[19, 190],[20, 189],[21, 190],[22, 189],[23, 198],[24, 197],[25, 199],[26, 198],[27, 190]])

export const dark_red_SwitchThumb = n191
const n192 = t([[12, 197],[13, 94],[14, 196],[15, 194],[16, 198],[17, 199],[18, 189],[19, 190],[20, 189],[21, 190],[22, 190],[23, 194],[24, 193],[25, 196],[26, 194],[27, 194]])

export const dark_red_SliderTrackActive = n192
const n193 = t([[12, 199],[13, 198],[14, 197],[15, 94],[16, 0],[17, 199],[18, 189],[19, 190],[20, 189],[21, 190],[22, 189],[23, 94],[24, 196],[25, 197],[26, 94],[27, 192]])

export const dark_red_SliderThumb = n193
export const dark_red_Tooltip = n193
export const dark_red_ProgressIndicator = n193
const n194 = t([[12, 135],[13, 136],[14, 137],[15, 137],[16, 134],[17, 134],[18, 0],[19, 144],[20, 0],[21, 144],[22, 144],[23, 137],[24, 138],[25, 137],[26, 137],[27, 142]])

export const dark_gray_ListItem = n194
const n195 = t([[12, 136],[13, 137],[14, 137],[15, 138],[16, 135],[17, 134],[18, 0],[19, 144],[20, 0],[21, 144],[22, 0],[23, 138],[24, 140],[25, 137],[26, 138],[27, 141]])

export const dark_gray_Card = n195
export const dark_gray_DrawerFrame = n195
export const dark_gray_Progress = n195
export const dark_gray_TooltipArrow = n195
const n196 = t([[12, 137],[13, 137],[14, 138],[15, 140],[16, 136],[17, 135],[18, 0],[19, 144],[20, 0],[21, 144],[22, 144],[23, 138],[24, 140],[25, 137],[26, 138],[27, 140]])

export const dark_gray_Button = n196
export const dark_gray_Switch = n196
export const dark_gray_TooltipContent = n196
export const dark_gray_SliderTrack = n196
const n197 = t([[12, 135],[13, 136],[14, 137],[15, 137],[16, 134],[17, 134],[18, 0],[19, 144],[20, 0],[21, 144],[22, 144],[23, 140],[24, 141],[25, 138],[26, 140],[27, 142]])

export const dark_gray_Checkbox = n197
export const dark_gray_RadioGroupItem = n197
export const dark_gray_Input = n197
export const dark_gray_TextArea = n197
const n198 = t([[12, 0],[13, 0],[14, 144],[15, 143],[16, 0],[17, 0],[18, 134],[19, 135],[20, 134],[21, 135],[22, 134],[23, 143],[24, 142],[25, 144],[26, 143],[27, 135]])

export const dark_gray_SwitchThumb = n198
const n199 = t([[12, 142],[13, 141],[14, 140],[15, 138],[16, 143],[17, 144],[18, 134],[19, 135],[20, 134],[21, 135],[22, 135],[23, 138],[24, 137],[25, 140],[26, 138],[27, 138]])

export const dark_gray_SliderTrackActive = n199
const n200 = t([[12, 144],[13, 143],[14, 142],[15, 141],[16, 0],[17, 144],[18, 134],[19, 135],[20, 134],[21, 135],[22, 134],[23, 141],[24, 140],[25, 142],[26, 141],[27, 137]])

export const dark_gray_SliderThumb = n200
export const dark_gray_Tooltip = n200
export const dark_gray_ProgressIndicator = n200
const n201 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]])

export const light_alt1_ListItem = n201
const n202 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]])

export const light_alt1_Card = n202
export const light_alt1_DrawerFrame = n202
export const light_alt1_Progress = n202
export const light_alt1_TooltipArrow = n202
const n203 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]])

export const light_alt1_Button = n203
export const light_alt1_Switch = n203
export const light_alt1_TooltipContent = n203
export const light_alt1_SliderTrack = n203
const n204 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]])

export const light_alt1_Checkbox = n204
export const light_alt1_RadioGroupItem = n204
export const light_alt1_Input = n204
export const light_alt1_TextArea = n204
const n205 = t([[12, 11],[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]])

export const light_alt1_SwitchThumb = n205
const n206 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]])

export const light_alt1_SliderTrackActive = n206
const n207 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]])

export const light_alt1_SliderThumb = n207
export const light_alt1_Tooltip = n207
export const light_alt1_ProgressIndicator = n207
const n208 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]])

export const light_alt2_ListItem = n208
const n209 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]])

export const light_alt2_Card = n209
export const light_alt2_DrawerFrame = n209
export const light_alt2_Progress = n209
export const light_alt2_TooltipArrow = n209
const n210 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 6],[24, 7],[25, 5],[26, 6],[27, 4]])

export const light_alt2_Button = n210
export const light_alt2_Switch = n210
export const light_alt2_TooltipContent = n210
export const light_alt2_SliderTrack = n210
const n211 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 7],[24, 8],[25, 6],[26, 7],[27, 6]])

export const light_alt2_Checkbox = n211
export const light_alt2_RadioGroupItem = n211
export const light_alt2_Input = n211
export const light_alt2_TextArea = n211
const n212 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 3]])

export const light_alt2_SwitchThumb = n212
const n213 = t([[12, 6],[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 4],[24, 3],[25, 5],[26, 4],[27, 7]])

export const light_alt2_SliderTrackActive = n213
const n214 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 6],[24, 5],[25, 7],[26, 6],[27, 5]])

export const light_alt2_SliderThumb = n214
export const light_alt2_Tooltip = n214
export const light_alt2_ProgressIndicator = n214
const n215 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]])

export const light_active_ListItem = n215
const n216 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 7],[24, 8],[25, 6],[26, 7],[27, 3]])

export const light_active_Button = n216
export const light_active_Switch = n216
const n217 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 8],[24, 9],[25, 7],[26, 8],[27, 5]])

export const light_active_Checkbox = n217
export const light_active_Input = n217
export const light_active_TextArea = n217
const n218 = t([[12, 5],[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 3],[24, 2],[25, 4],[26, 3],[27, 8]])

export const light_active_SliderTrackActive = n218
const n219 = t([[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[18, 122],[19, 121],[20, 122],[21, 121],[22, 0],[23, 117],[24, 118],[25, 116],[26, 117],[27, 119]])

export const dark_alt1_ListItem = n219
const n220 = t([[12, 115],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 122],[19, 121],[20, 122],[21, 121],[22, 122],[23, 118],[24, 119],[25, 117],[26, 118],[27, 118]])

export const dark_alt1_Card = n220
export const dark_alt1_DrawerFrame = n220
export const dark_alt1_Progress = n220
export const dark_alt1_TooltipArrow = n220
const n221 = t([[12, 116],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 122],[19, 121],[20, 122],[21, 121],[22, 121],[23, 118],[24, 119],[25, 117],[26, 118],[27, 117]])

export const dark_alt1_Button = n221
export const dark_alt1_Switch = n221
export const dark_alt1_TooltipContent = n221
export const dark_alt1_SliderTrack = n221
const n222 = t([[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[18, 122],[19, 121],[20, 122],[21, 121],[22, 0],[23, 119],[24, 120],[25, 118],[26, 119],[27, 119]])

export const dark_alt1_Checkbox = n222
export const dark_alt1_RadioGroupItem = n222
export const dark_alt1_Input = n222
export const dark_alt1_TextArea = n222
const n223 = t([[12, 0],[13, 122],[14, 121],[15, 120],[16, 0],[17, 0],[18, 113],[19, 114],[20, 113],[21, 114],[22, 112],[23, 120],[24, 119],[25, 121],[26, 120],[27, 114]])

export const dark_alt1_SwitchThumb = n223
const n224 = t([[12, 119],[13, 118],[14, 117],[15, 116],[16, 120],[17, 121],[18, 113],[19, 114],[20, 113],[21, 114],[22, 114],[23, 116],[24, 115],[25, 117],[26, 116],[27, 118]])

export const dark_alt1_SliderTrackActive = n224
const n225 = t([[12, 121],[13, 120],[14, 119],[15, 118],[16, 122],[17, 0],[18, 113],[19, 114],[20, 113],[21, 114],[22, 112],[23, 118],[24, 117],[25, 119],[26, 118],[27, 116]])

export const dark_alt1_SliderThumb = n225
export const dark_alt1_Tooltip = n225
export const dark_alt1_ProgressIndicator = n225
const n226 = t([[12, 115],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 121],[19, 120],[20, 121],[21, 120],[22, 122],[23, 117],[24, 118],[25, 116],[26, 117],[27, 118]])

export const dark_alt2_ListItem = n226
const n227 = t([[12, 116],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 121],[19, 120],[20, 121],[21, 120],[22, 121],[23, 118],[24, 119],[25, 117],[26, 118],[27, 117]])

export const dark_alt2_Card = n227
export const dark_alt2_DrawerFrame = n227
export const dark_alt2_Progress = n227
export const dark_alt2_TooltipArrow = n227
const n228 = t([[12, 117],[13, 118],[14, 119],[15, 120],[16, 116],[17, 115],[18, 121],[19, 120],[20, 121],[21, 120],[22, 120],[23, 118],[24, 119],[25, 117],[26, 118],[27, 116]])

export const dark_alt2_Button = n228
export const dark_alt2_Switch = n228
export const dark_alt2_TooltipContent = n228
export const dark_alt2_SliderTrack = n228
const n229 = t([[12, 115],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 121],[19, 120],[20, 121],[21, 120],[22, 122],[23, 119],[24, 120],[25, 118],[26, 119],[27, 118]])

export const dark_alt2_Checkbox = n229
export const dark_alt2_RadioGroupItem = n229
export const dark_alt2_Input = n229
export const dark_alt2_TextArea = n229
const n230 = t([[12, 122],[13, 121],[14, 120],[15, 119],[16, 0],[17, 0],[18, 114],[19, 115],[20, 114],[21, 115],[22, 112],[23, 120],[24, 119],[25, 121],[26, 120],[27, 115]])

export const dark_alt2_SwitchThumb = n230
const n231 = t([[12, 118],[13, 117],[14, 116],[15, 115],[16, 119],[17, 120],[18, 114],[19, 115],[20, 114],[21, 115],[22, 115],[23, 116],[24, 115],[25, 117],[26, 116],[27, 119]])

export const dark_alt2_SliderTrackActive = n231
const n232 = t([[12, 120],[13, 119],[14, 118],[15, 117],[16, 121],[17, 122],[18, 114],[19, 115],[20, 114],[21, 115],[22, 113],[23, 118],[24, 117],[25, 119],[26, 118],[27, 117]])

export const dark_alt2_SliderThumb = n232
export const dark_alt2_Tooltip = n232
export const dark_alt2_ProgressIndicator = n232
const n233 = t([[12, 116],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[19, 119],[20, 120],[21, 119],[22, 121],[23, 118],[24, 119],[25, 117],[26, 118],[27, 117]])

export const dark_active_ListItem = n233
const n234 = t([[12, 118],[13, 119],[14, 120],[15, 121],[16, 117],[17, 116],[19, 119],[20, 120],[21, 119],[22, 119],[23, 119],[24, 120],[25, 118],[26, 119],[27, 115]])

export const dark_active_Button = n234
export const dark_active_Switch = n234
const n235 = t([[12, 116],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[19, 119],[20, 120],[21, 119],[22, 121],[23, 120],[24, 121],[25, 119],[26, 120],[27, 117]])

export const dark_active_Checkbox = n235
export const dark_active_Input = n235
export const dark_active_TextArea = n235
const n236 = t([[12, 117],[13, 116],[14, 115],[15, 114],[16, 118],[17, 119],[19, 116],[20, 115],[21, 116],[22, 116],[23, 115],[24, 114],[25, 116],[26, 115],[27, 120]])

export const dark_active_SliderTrackActive = n236
const n237 = t([[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 50],[18, 61],[19, 60],[20, 61],[21, 60],[22, 11],[23, 54],[24, 55],[25, 54],[26, 54],[27, 58]])

export const light_orange_alt1_ListItem = n237
const n238 = t([[12, 53],[13, 54],[14, 55],[15, 57],[16, 52],[17, 51],[18, 61],[19, 60],[20, 61],[21, 60],[22, 61],[23, 55],[24, 57],[25, 55],[26, 55],[27, 57]])

export const light_orange_alt1_Card = n238
export const light_orange_alt1_DrawerFrame = n238
export const light_orange_alt1_Progress = n238
export const light_orange_alt1_TooltipArrow = n238
const n239 = t([[12, 54],[13, 55],[14, 57],[15, 58],[16, 53],[17, 52],[18, 61],[19, 60],[20, 61],[21, 60],[22, 60],[23, 55],[24, 57],[25, 55],[26, 55],[27, 55]])

export const light_orange_alt1_Button = n239
export const light_orange_alt1_Switch = n239
export const light_orange_alt1_TooltipContent = n239
export const light_orange_alt1_SliderTrack = n239
const n240 = t([[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 50],[18, 61],[19, 60],[20, 61],[21, 60],[22, 11],[23, 57],[24, 58],[25, 57],[26, 57],[27, 58]])

export const light_orange_alt1_Checkbox = n240
export const light_orange_alt1_RadioGroupItem = n240
export const light_orange_alt1_Input = n240
export const light_orange_alt1_TextArea = n240
const n241 = t([[12, 11],[13, 61],[14, 60],[15, 59],[16, 11],[17, 11],[18, 51],[19, 52],[20, 51],[21, 52],[22, 50],[23, 60],[24, 59],[25, 60],[26, 60],[27, 52]])

export const light_orange_alt1_SwitchThumb = n241
const n242 = t([[12, 58],[13, 57],[14, 55],[15, 54],[16, 59],[17, 60],[18, 51],[19, 52],[20, 51],[21, 52],[22, 52],[23, 55],[24, 54],[25, 55],[26, 55],[27, 57]])

export const light_orange_alt1_SliderTrackActive = n242
const n243 = t([[12, 60],[13, 59],[14, 58],[15, 57],[16, 61],[17, 11],[18, 51],[19, 52],[20, 51],[21, 52],[22, 50],[23, 58],[24, 57],[25, 58],[26, 58],[27, 54]])

export const light_orange_alt1_SliderThumb = n243
export const light_orange_alt1_Tooltip = n243
export const light_orange_alt1_ProgressIndicator = n243
const n244 = t([[12, 53],[13, 54],[14, 55],[15, 57],[16, 52],[17, 51],[18, 60],[19, 59],[20, 60],[21, 59],[22, 61],[23, 54],[24, 55],[25, 54],[26, 54],[27, 57]])

export const light_orange_alt2_ListItem = n244
const n245 = t([[12, 54],[13, 55],[14, 57],[15, 58],[16, 53],[17, 52],[18, 60],[19, 59],[20, 60],[21, 59],[22, 60],[23, 55],[24, 57],[25, 55],[26, 55],[27, 55]])

export const light_orange_alt2_Card = n245
export const light_orange_alt2_DrawerFrame = n245
export const light_orange_alt2_Progress = n245
export const light_orange_alt2_TooltipArrow = n245
const n246 = t([[12, 55],[13, 57],[14, 58],[15, 59],[16, 54],[17, 53],[18, 60],[19, 59],[20, 60],[21, 59],[22, 59],[23, 55],[24, 57],[25, 55],[26, 55],[27, 54]])

export const light_orange_alt2_Button = n246
export const light_orange_alt2_Switch = n246
export const light_orange_alt2_TooltipContent = n246
export const light_orange_alt2_SliderTrack = n246
const n247 = t([[12, 53],[13, 54],[14, 55],[15, 57],[16, 52],[17, 51],[18, 60],[19, 59],[20, 60],[21, 59],[22, 61],[23, 57],[24, 58],[25, 57],[26, 57],[27, 57]])

export const light_orange_alt2_Checkbox = n247
export const light_orange_alt2_RadioGroupItem = n247
export const light_orange_alt2_Input = n247
export const light_orange_alt2_TextArea = n247
const n248 = t([[12, 61],[13, 60],[14, 59],[15, 58],[16, 11],[17, 11],[18, 52],[19, 53],[20, 52],[21, 53],[22, 50],[23, 60],[24, 59],[25, 60],[26, 60],[27, 53]])

export const light_orange_alt2_SwitchThumb = n248
const n249 = t([[12, 57],[13, 55],[14, 54],[15, 53],[16, 58],[17, 59],[18, 52],[19, 53],[20, 52],[21, 53],[22, 53],[23, 55],[24, 54],[25, 55],[26, 55],[27, 58]])

export const light_orange_alt2_SliderTrackActive = n249
const n250 = t([[12, 59],[13, 58],[14, 57],[15, 55],[16, 60],[17, 61],[18, 52],[19, 53],[20, 52],[21, 53],[22, 51],[23, 58],[24, 57],[25, 58],[26, 58],[27, 55]])

export const light_orange_alt2_SliderThumb = n250
export const light_orange_alt2_Tooltip = n250
export const light_orange_alt2_ProgressIndicator = n250
const n251 = t([[12, 54],[13, 55],[14, 57],[15, 58],[16, 53],[17, 52],[19, 58],[20, 59],[21, 58],[22, 60],[23, 55],[24, 57],[25, 55],[26, 55],[27, 55]])

export const light_orange_active_ListItem = n251
const n252 = t([[12, 57],[13, 58],[14, 59],[15, 60],[16, 55],[17, 54],[19, 58],[20, 59],[21, 58],[22, 58],[23, 57],[24, 58],[25, 57],[26, 57],[27, 53]])

export const light_orange_active_Button = n252
export const light_orange_active_Switch = n252
const n253 = t([[12, 54],[13, 55],[14, 57],[15, 58],[16, 53],[17, 52],[19, 58],[20, 59],[21, 58],[22, 60],[23, 58],[24, 59],[25, 58],[26, 58],[27, 55]])

export const light_orange_active_Checkbox = n253
export const light_orange_active_Input = n253
export const light_orange_active_TextArea = n253
const n254 = t([[12, 55],[13, 54],[14, 53],[15, 52],[16, 57],[17, 58],[19, 54],[20, 53],[21, 54],[22, 54],[23, 54],[24, 53],[25, 54],[26, 54],[27, 59]])

export const light_orange_active_SliderTrackActive = n254
const n255 = t([[12, 100],[13, 101],[14, 102],[15, 103],[16, 99],[17, 98],[18, 109],[19, 108],[20, 109],[21, 108],[22, 11],[23, 102],[24, 103],[25, 102],[26, 102],[27, 106]])

export const light_yellow_alt1_ListItem = n255
const n256 = t([[12, 101],[13, 102],[14, 103],[15, 105],[16, 100],[17, 99],[18, 109],[19, 108],[20, 109],[21, 108],[22, 109],[23, 103],[24, 105],[25, 103],[26, 103],[27, 105]])

export const light_yellow_alt1_Card = n256
export const light_yellow_alt1_DrawerFrame = n256
export const light_yellow_alt1_Progress = n256
export const light_yellow_alt1_TooltipArrow = n256
const n257 = t([[12, 102],[13, 103],[14, 105],[15, 106],[16, 101],[17, 100],[18, 109],[19, 108],[20, 109],[21, 108],[22, 108],[23, 103],[24, 105],[25, 103],[26, 103],[27, 103]])

export const light_yellow_alt1_Button = n257
export const light_yellow_alt1_Switch = n257
export const light_yellow_alt1_TooltipContent = n257
export const light_yellow_alt1_SliderTrack = n257
const n258 = t([[12, 100],[13, 101],[14, 102],[15, 103],[16, 99],[17, 98],[18, 109],[19, 108],[20, 109],[21, 108],[22, 11],[23, 105],[24, 106],[25, 105],[26, 105],[27, 106]])

export const light_yellow_alt1_Checkbox = n258
export const light_yellow_alt1_RadioGroupItem = n258
export const light_yellow_alt1_Input = n258
export const light_yellow_alt1_TextArea = n258
const n259 = t([[12, 11],[13, 109],[14, 108],[15, 107],[16, 11],[17, 11],[18, 99],[19, 100],[20, 99],[21, 100],[22, 98],[23, 108],[24, 107],[25, 108],[26, 108],[27, 100]])

export const light_yellow_alt1_SwitchThumb = n259
const n260 = t([[12, 106],[13, 105],[14, 103],[15, 102],[16, 107],[17, 108],[18, 99],[19, 100],[20, 99],[21, 100],[22, 100],[23, 103],[24, 102],[25, 103],[26, 103],[27, 105]])

export const light_yellow_alt1_SliderTrackActive = n260
const n261 = t([[12, 108],[13, 107],[14, 106],[15, 105],[16, 109],[17, 11],[18, 99],[19, 100],[20, 99],[21, 100],[22, 98],[23, 106],[24, 105],[25, 106],[26, 106],[27, 102]])

export const light_yellow_alt1_SliderThumb = n261
export const light_yellow_alt1_Tooltip = n261
export const light_yellow_alt1_ProgressIndicator = n261
const n262 = t([[12, 101],[13, 102],[14, 103],[15, 105],[16, 100],[17, 99],[18, 108],[19, 107],[20, 108],[21, 107],[22, 109],[23, 102],[24, 103],[25, 102],[26, 102],[27, 105]])

export const light_yellow_alt2_ListItem = n262
const n263 = t([[12, 102],[13, 103],[14, 105],[15, 106],[16, 101],[17, 100],[18, 108],[19, 107],[20, 108],[21, 107],[22, 108],[23, 103],[24, 105],[25, 103],[26, 103],[27, 103]])

export const light_yellow_alt2_Card = n263
export const light_yellow_alt2_DrawerFrame = n263
export const light_yellow_alt2_Progress = n263
export const light_yellow_alt2_TooltipArrow = n263
const n264 = t([[12, 103],[13, 105],[14, 106],[15, 107],[16, 102],[17, 101],[18, 108],[19, 107],[20, 108],[21, 107],[22, 107],[23, 103],[24, 105],[25, 103],[26, 103],[27, 102]])

export const light_yellow_alt2_Button = n264
export const light_yellow_alt2_Switch = n264
export const light_yellow_alt2_TooltipContent = n264
export const light_yellow_alt2_SliderTrack = n264
const n265 = t([[12, 101],[13, 102],[14, 103],[15, 105],[16, 100],[17, 99],[18, 108],[19, 107],[20, 108],[21, 107],[22, 109],[23, 105],[24, 106],[25, 105],[26, 105],[27, 105]])

export const light_yellow_alt2_Checkbox = n265
export const light_yellow_alt2_RadioGroupItem = n265
export const light_yellow_alt2_Input = n265
export const light_yellow_alt2_TextArea = n265
const n266 = t([[12, 109],[13, 108],[14, 107],[15, 106],[16, 11],[17, 11],[18, 100],[19, 101],[20, 100],[21, 101],[22, 98],[23, 108],[24, 107],[25, 108],[26, 108],[27, 101]])

export const light_yellow_alt2_SwitchThumb = n266
const n267 = t([[12, 105],[13, 103],[14, 102],[15, 101],[16, 106],[17, 107],[18, 100],[19, 101],[20, 100],[21, 101],[22, 101],[23, 103],[24, 102],[25, 103],[26, 103],[27, 106]])

export const light_yellow_alt2_SliderTrackActive = n267
const n268 = t([[12, 107],[13, 106],[14, 105],[15, 103],[16, 108],[17, 109],[18, 100],[19, 101],[20, 100],[21, 101],[22, 99],[23, 106],[24, 105],[25, 106],[26, 106],[27, 103]])

export const light_yellow_alt2_SliderThumb = n268
export const light_yellow_alt2_Tooltip = n268
export const light_yellow_alt2_ProgressIndicator = n268
const n269 = t([[12, 102],[13, 103],[14, 105],[15, 106],[16, 101],[17, 100],[19, 106],[20, 107],[21, 106],[22, 108],[23, 103],[24, 105],[25, 103],[26, 103],[27, 103]])

export const light_yellow_active_ListItem = n269
const n270 = t([[12, 105],[13, 106],[14, 107],[15, 108],[16, 103],[17, 102],[19, 106],[20, 107],[21, 106],[22, 106],[23, 105],[24, 106],[25, 105],[26, 105],[27, 101]])

export const light_yellow_active_Button = n270
export const light_yellow_active_Switch = n270
const n271 = t([[12, 102],[13, 103],[14, 105],[15, 106],[16, 101],[17, 100],[19, 106],[20, 107],[21, 106],[22, 108],[23, 106],[24, 107],[25, 106],[26, 106],[27, 103]])

export const light_yellow_active_Checkbox = n271
export const light_yellow_active_Input = n271
export const light_yellow_active_TextArea = n271
const n272 = t([[12, 103],[13, 102],[14, 101],[15, 100],[16, 105],[17, 106],[19, 102],[20, 101],[21, 102],[22, 102],[23, 102],[24, 101],[25, 102],[26, 102],[27, 107]])

export const light_yellow_active_SliderTrackActive = n272
const n273 = t([[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 49],[19, 48],[20, 49],[21, 48],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 46]])

export const light_green_alt1_ListItem = n273
const n274 = t([[12, 41],[13, 42],[14, 43],[15, 45],[16, 40],[17, 39],[18, 49],[19, 48],[20, 49],[21, 48],[22, 49],[23, 43],[24, 45],[25, 43],[26, 43],[27, 45]])

export const light_green_alt1_Card = n274
export const light_green_alt1_DrawerFrame = n274
export const light_green_alt1_Progress = n274
export const light_green_alt1_TooltipArrow = n274
const n275 = t([[12, 42],[13, 43],[14, 45],[15, 46],[16, 41],[17, 40],[18, 49],[19, 48],[20, 49],[21, 48],[22, 48],[23, 43],[24, 45],[25, 43],[26, 43],[27, 43]])

export const light_green_alt1_Button = n275
export const light_green_alt1_Switch = n275
export const light_green_alt1_TooltipContent = n275
export const light_green_alt1_SliderTrack = n275
const n276 = t([[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 49],[19, 48],[20, 49],[21, 48],[22, 11],[23, 45],[24, 46],[25, 45],[26, 45],[27, 46]])

export const light_green_alt1_Checkbox = n276
export const light_green_alt1_RadioGroupItem = n276
export const light_green_alt1_Input = n276
export const light_green_alt1_TextArea = n276
const n277 = t([[12, 11],[13, 49],[14, 48],[15, 47],[16, 11],[17, 11],[18, 39],[19, 40],[20, 39],[21, 40],[22, 38],[23, 48],[24, 47],[25, 48],[26, 48],[27, 40]])

export const light_green_alt1_SwitchThumb = n277
const n278 = t([[12, 46],[13, 45],[14, 43],[15, 42],[16, 47],[17, 48],[18, 39],[19, 40],[20, 39],[21, 40],[22, 40],[23, 43],[24, 42],[25, 43],[26, 43],[27, 45]])

export const light_green_alt1_SliderTrackActive = n278
const n279 = t([[12, 48],[13, 47],[14, 46],[15, 45],[16, 49],[17, 11],[18, 39],[19, 40],[20, 39],[21, 40],[22, 38],[23, 46],[24, 45],[25, 46],[26, 46],[27, 42]])

export const light_green_alt1_SliderThumb = n279
export const light_green_alt1_Tooltip = n279
export const light_green_alt1_ProgressIndicator = n279
const n280 = t([[12, 41],[13, 42],[14, 43],[15, 45],[16, 40],[17, 39],[18, 48],[19, 47],[20, 48],[21, 47],[22, 49],[23, 42],[24, 43],[25, 42],[26, 42],[27, 45]])

export const light_green_alt2_ListItem = n280
const n281 = t([[12, 42],[13, 43],[14, 45],[15, 46],[16, 41],[17, 40],[18, 48],[19, 47],[20, 48],[21, 47],[22, 48],[23, 43],[24, 45],[25, 43],[26, 43],[27, 43]])

export const light_green_alt2_Card = n281
export const light_green_alt2_DrawerFrame = n281
export const light_green_alt2_Progress = n281
export const light_green_alt2_TooltipArrow = n281
const n282 = t([[12, 43],[13, 45],[14, 46],[15, 47],[16, 42],[17, 41],[18, 48],[19, 47],[20, 48],[21, 47],[22, 47],[23, 43],[24, 45],[25, 43],[26, 43],[27, 42]])

export const light_green_alt2_Button = n282
export const light_green_alt2_Switch = n282
export const light_green_alt2_TooltipContent = n282
export const light_green_alt2_SliderTrack = n282
const n283 = t([[12, 41],[13, 42],[14, 43],[15, 45],[16, 40],[17, 39],[18, 48],[19, 47],[20, 48],[21, 47],[22, 49],[23, 45],[24, 46],[25, 45],[26, 45],[27, 45]])

export const light_green_alt2_Checkbox = n283
export const light_green_alt2_RadioGroupItem = n283
export const light_green_alt2_Input = n283
export const light_green_alt2_TextArea = n283
const n284 = t([[12, 49],[13, 48],[14, 47],[15, 46],[16, 11],[17, 11],[18, 40],[19, 41],[20, 40],[21, 41],[22, 38],[23, 48],[24, 47],[25, 48],[26, 48],[27, 41]])

export const light_green_alt2_SwitchThumb = n284
const n285 = t([[12, 45],[13, 43],[14, 42],[15, 41],[16, 46],[17, 47],[18, 40],[19, 41],[20, 40],[21, 41],[22, 41],[23, 43],[24, 42],[25, 43],[26, 43],[27, 46]])

export const light_green_alt2_SliderTrackActive = n285
const n286 = t([[12, 47],[13, 46],[14, 45],[15, 43],[16, 48],[17, 49],[18, 40],[19, 41],[20, 40],[21, 41],[22, 39],[23, 46],[24, 45],[25, 46],[26, 46],[27, 43]])

export const light_green_alt2_SliderThumb = n286
export const light_green_alt2_Tooltip = n286
export const light_green_alt2_ProgressIndicator = n286
const n287 = t([[12, 42],[13, 43],[14, 45],[15, 46],[16, 41],[17, 40],[19, 46],[20, 47],[21, 46],[22, 48],[23, 43],[24, 45],[25, 43],[26, 43],[27, 43]])

export const light_green_active_ListItem = n287
const n288 = t([[12, 45],[13, 46],[14, 47],[15, 48],[16, 43],[17, 42],[19, 46],[20, 47],[21, 46],[22, 46],[23, 45],[24, 46],[25, 45],[26, 45],[27, 41]])

export const light_green_active_Button = n288
export const light_green_active_Switch = n288
const n289 = t([[12, 42],[13, 43],[14, 45],[15, 46],[16, 41],[17, 40],[19, 46],[20, 47],[21, 46],[22, 48],[23, 46],[24, 47],[25, 46],[26, 46],[27, 43]])

export const light_green_active_Checkbox = n289
export const light_green_active_Input = n289
export const light_green_active_TextArea = n289
const n290 = t([[12, 43],[13, 42],[14, 41],[15, 40],[16, 45],[17, 46],[19, 42],[20, 41],[21, 42],[22, 42],[23, 42],[24, 41],[25, 42],[26, 42],[27, 47]])

export const light_green_active_SliderTrackActive = n290
const n291 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]])

export const light_blue_alt1_ListItem = n291
const n292 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 25],[19, 24],[20, 25],[21, 24],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]])

export const light_blue_alt1_Card = n292
export const light_blue_alt1_DrawerFrame = n292
export const light_blue_alt1_Progress = n292
export const light_blue_alt1_TooltipArrow = n292
const n293 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]])

export const light_blue_alt1_Button = n293
export const light_blue_alt1_Switch = n293
export const light_blue_alt1_TooltipContent = n293
export const light_blue_alt1_SliderTrack = n293
const n294 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 21],[24, 22],[25, 21],[26, 21],[27, 22]])

export const light_blue_alt1_Checkbox = n294
export const light_blue_alt1_RadioGroupItem = n294
export const light_blue_alt1_Input = n294
export const light_blue_alt1_TextArea = n294
const n295 = t([[12, 11],[13, 25],[14, 24],[15, 23],[16, 11],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 16]])

export const light_blue_alt1_SwitchThumb = n295
const n296 = t([[12, 22],[13, 21],[14, 19],[15, 18],[16, 23],[17, 24],[18, 15],[19, 16],[20, 15],[21, 16],[22, 16],[23, 19],[24, 18],[25, 19],[26, 19],[27, 21]])

export const light_blue_alt1_SliderTrackActive = n296
const n297 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 25],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 22],[24, 21],[25, 22],[26, 22],[27, 18]])

export const light_blue_alt1_SliderThumb = n297
export const light_blue_alt1_Tooltip = n297
export const light_blue_alt1_ProgressIndicator = n297
const n298 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]])

export const light_blue_alt2_ListItem = n298
const n299 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 24],[19, 23],[20, 24],[21, 23],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]])

export const light_blue_alt2_Card = n299
export const light_blue_alt2_DrawerFrame = n299
export const light_blue_alt2_Progress = n299
export const light_blue_alt2_TooltipArrow = n299
const n300 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 19],[24, 21],[25, 19],[26, 19],[27, 18]])

export const light_blue_alt2_Button = n300
export const light_blue_alt2_Switch = n300
export const light_blue_alt2_TooltipContent = n300
export const light_blue_alt2_SliderTrack = n300
const n301 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 21],[24, 22],[25, 21],[26, 21],[27, 21]])

export const light_blue_alt2_Checkbox = n301
export const light_blue_alt2_RadioGroupItem = n301
export const light_blue_alt2_Input = n301
export const light_blue_alt2_TextArea = n301
const n302 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 11],[18, 16],[19, 17],[20, 16],[21, 17],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 17]])

export const light_blue_alt2_SwitchThumb = n302
const n303 = t([[12, 21],[13, 19],[14, 18],[15, 17],[16, 22],[17, 23],[18, 16],[19, 17],[20, 16],[21, 17],[22, 17],[23, 19],[24, 18],[25, 19],[26, 19],[27, 22]])

export const light_blue_alt2_SliderTrackActive = n303
const n304 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 22],[24, 21],[25, 22],[26, 22],[27, 19]])

export const light_blue_alt2_SliderThumb = n304
export const light_blue_alt2_Tooltip = n304
export const light_blue_alt2_ProgressIndicator = n304
const n305 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]])

export const light_blue_active_ListItem = n305
const n306 = t([[12, 21],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[19, 22],[20, 23],[21, 22],[22, 22],[23, 21],[24, 22],[25, 21],[26, 21],[27, 17]])

export const light_blue_active_Button = n306
export const light_blue_active_Switch = n306
const n307 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 22],[24, 23],[25, 22],[26, 22],[27, 19]])

export const light_blue_active_Checkbox = n307
export const light_blue_active_Input = n307
export const light_blue_active_TextArea = n307
const n308 = t([[12, 19],[13, 18],[14, 17],[15, 16],[16, 21],[17, 22],[19, 18],[20, 17],[21, 18],[22, 18],[23, 18],[24, 17],[25, 18],[26, 18],[27, 23]])

export const light_blue_active_SliderTrackActive = n308
const n309 = t([[12, 76],[13, 77],[14, 78],[15, 79],[16, 75],[17, 74],[18, 85],[19, 84],[20, 85],[21, 84],[22, 11],[23, 78],[24, 79],[25, 78],[26, 78],[27, 82]])

export const light_purple_alt1_ListItem = n309
const n310 = t([[12, 77],[13, 78],[14, 79],[15, 81],[16, 76],[17, 75],[18, 85],[19, 84],[20, 85],[21, 84],[22, 85],[23, 79],[24, 81],[25, 79],[26, 79],[27, 81]])

export const light_purple_alt1_Card = n310
export const light_purple_alt1_DrawerFrame = n310
export const light_purple_alt1_Progress = n310
export const light_purple_alt1_TooltipArrow = n310
const n311 = t([[12, 78],[13, 79],[14, 81],[15, 82],[16, 77],[17, 76],[18, 85],[19, 84],[20, 85],[21, 84],[22, 84],[23, 79],[24, 81],[25, 79],[26, 79],[27, 79]])

export const light_purple_alt1_Button = n311
export const light_purple_alt1_Switch = n311
export const light_purple_alt1_TooltipContent = n311
export const light_purple_alt1_SliderTrack = n311
const n312 = t([[12, 76],[13, 77],[14, 78],[15, 79],[16, 75],[17, 74],[18, 85],[19, 84],[20, 85],[21, 84],[22, 11],[23, 81],[24, 82],[25, 81],[26, 81],[27, 82]])

export const light_purple_alt1_Checkbox = n312
export const light_purple_alt1_RadioGroupItem = n312
export const light_purple_alt1_Input = n312
export const light_purple_alt1_TextArea = n312
const n313 = t([[12, 11],[13, 85],[14, 84],[15, 83],[16, 11],[17, 11],[18, 75],[19, 76],[20, 75],[21, 76],[22, 74],[23, 84],[24, 83],[25, 84],[26, 84],[27, 76]])

export const light_purple_alt1_SwitchThumb = n313
const n314 = t([[12, 82],[13, 81],[14, 79],[15, 78],[16, 83],[17, 84],[18, 75],[19, 76],[20, 75],[21, 76],[22, 76],[23, 79],[24, 78],[25, 79],[26, 79],[27, 81]])

export const light_purple_alt1_SliderTrackActive = n314
const n315 = t([[12, 84],[13, 83],[14, 82],[15, 81],[16, 85],[17, 11],[18, 75],[19, 76],[20, 75],[21, 76],[22, 74],[23, 82],[24, 81],[25, 82],[26, 82],[27, 78]])

export const light_purple_alt1_SliderThumb = n315
export const light_purple_alt1_Tooltip = n315
export const light_purple_alt1_ProgressIndicator = n315
const n316 = t([[12, 77],[13, 78],[14, 79],[15, 81],[16, 76],[17, 75],[18, 84],[19, 83],[20, 84],[21, 83],[22, 85],[23, 78],[24, 79],[25, 78],[26, 78],[27, 81]])

export const light_purple_alt2_ListItem = n316
const n317 = t([[12, 78],[13, 79],[14, 81],[15, 82],[16, 77],[17, 76],[18, 84],[19, 83],[20, 84],[21, 83],[22, 84],[23, 79],[24, 81],[25, 79],[26, 79],[27, 79]])

export const light_purple_alt2_Card = n317
export const light_purple_alt2_DrawerFrame = n317
export const light_purple_alt2_Progress = n317
export const light_purple_alt2_TooltipArrow = n317
const n318 = t([[12, 79],[13, 81],[14, 82],[15, 83],[16, 78],[17, 77],[18, 84],[19, 83],[20, 84],[21, 83],[22, 83],[23, 79],[24, 81],[25, 79],[26, 79],[27, 78]])

export const light_purple_alt2_Button = n318
export const light_purple_alt2_Switch = n318
export const light_purple_alt2_TooltipContent = n318
export const light_purple_alt2_SliderTrack = n318
const n319 = t([[12, 77],[13, 78],[14, 79],[15, 81],[16, 76],[17, 75],[18, 84],[19, 83],[20, 84],[21, 83],[22, 85],[23, 81],[24, 82],[25, 81],[26, 81],[27, 81]])

export const light_purple_alt2_Checkbox = n319
export const light_purple_alt2_RadioGroupItem = n319
export const light_purple_alt2_Input = n319
export const light_purple_alt2_TextArea = n319
const n320 = t([[12, 85],[13, 84],[14, 83],[15, 82],[16, 11],[17, 11],[18, 76],[19, 77],[20, 76],[21, 77],[22, 74],[23, 84],[24, 83],[25, 84],[26, 84],[27, 77]])

export const light_purple_alt2_SwitchThumb = n320
const n321 = t([[12, 81],[13, 79],[14, 78],[15, 77],[16, 82],[17, 83],[18, 76],[19, 77],[20, 76],[21, 77],[22, 77],[23, 79],[24, 78],[25, 79],[26, 79],[27, 82]])

export const light_purple_alt2_SliderTrackActive = n321
const n322 = t([[12, 83],[13, 82],[14, 81],[15, 79],[16, 84],[17, 85],[18, 76],[19, 77],[20, 76],[21, 77],[22, 75],[23, 82],[24, 81],[25, 82],[26, 82],[27, 79]])

export const light_purple_alt2_SliderThumb = n322
export const light_purple_alt2_Tooltip = n322
export const light_purple_alt2_ProgressIndicator = n322
const n323 = t([[12, 78],[13, 79],[14, 81],[15, 82],[16, 77],[17, 76],[19, 82],[20, 83],[21, 82],[22, 84],[23, 79],[24, 81],[25, 79],[26, 79],[27, 79]])

export const light_purple_active_ListItem = n323
const n324 = t([[12, 81],[13, 82],[14, 83],[15, 84],[16, 79],[17, 78],[19, 82],[20, 83],[21, 82],[22, 82],[23, 81],[24, 82],[25, 81],[26, 81],[27, 77]])

export const light_purple_active_Button = n324
export const light_purple_active_Switch = n324
const n325 = t([[12, 78],[13, 79],[14, 81],[15, 82],[16, 77],[17, 76],[19, 82],[20, 83],[21, 82],[22, 84],[23, 82],[24, 83],[25, 82],[26, 82],[27, 79]])

export const light_purple_active_Checkbox = n325
export const light_purple_active_Input = n325
export const light_purple_active_TextArea = n325
const n326 = t([[12, 79],[13, 78],[14, 77],[15, 76],[16, 81],[17, 82],[19, 78],[20, 77],[21, 78],[22, 78],[23, 78],[24, 77],[25, 78],[26, 78],[27, 83]])

export const light_purple_active_SliderTrackActive = n326
const n327 = t([[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 62],[18, 73],[19, 72],[20, 73],[21, 72],[22, 11],[23, 66],[24, 67],[25, 66],[26, 66],[27, 70]])

export const light_pink_alt1_ListItem = n327
const n328 = t([[12, 65],[13, 66],[14, 67],[15, 69],[16, 64],[17, 63],[18, 73],[19, 72],[20, 73],[21, 72],[22, 73],[23, 67],[24, 69],[25, 67],[26, 67],[27, 69]])

export const light_pink_alt1_Card = n328
export const light_pink_alt1_DrawerFrame = n328
export const light_pink_alt1_Progress = n328
export const light_pink_alt1_TooltipArrow = n328
const n329 = t([[12, 66],[13, 67],[14, 69],[15, 70],[16, 65],[17, 64],[18, 73],[19, 72],[20, 73],[21, 72],[22, 72],[23, 67],[24, 69],[25, 67],[26, 67],[27, 67]])

export const light_pink_alt1_Button = n329
export const light_pink_alt1_Switch = n329
export const light_pink_alt1_TooltipContent = n329
export const light_pink_alt1_SliderTrack = n329
const n330 = t([[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 62],[18, 73],[19, 72],[20, 73],[21, 72],[22, 11],[23, 69],[24, 70],[25, 69],[26, 69],[27, 70]])

export const light_pink_alt1_Checkbox = n330
export const light_pink_alt1_RadioGroupItem = n330
export const light_pink_alt1_Input = n330
export const light_pink_alt1_TextArea = n330
const n331 = t([[12, 11],[13, 73],[14, 72],[15, 71],[16, 11],[17, 11],[18, 63],[19, 64],[20, 63],[21, 64],[22, 62],[23, 72],[24, 71],[25, 72],[26, 72],[27, 64]])

export const light_pink_alt1_SwitchThumb = n331
const n332 = t([[12, 70],[13, 69],[14, 67],[15, 66],[16, 71],[17, 72],[18, 63],[19, 64],[20, 63],[21, 64],[22, 64],[23, 67],[24, 66],[25, 67],[26, 67],[27, 69]])

export const light_pink_alt1_SliderTrackActive = n332
const n333 = t([[12, 72],[13, 71],[14, 70],[15, 69],[16, 73],[17, 11],[18, 63],[19, 64],[20, 63],[21, 64],[22, 62],[23, 70],[24, 69],[25, 70],[26, 70],[27, 66]])

export const light_pink_alt1_SliderThumb = n333
export const light_pink_alt1_Tooltip = n333
export const light_pink_alt1_ProgressIndicator = n333
const n334 = t([[12, 65],[13, 66],[14, 67],[15, 69],[16, 64],[17, 63],[18, 72],[19, 71],[20, 72],[21, 71],[22, 73],[23, 66],[24, 67],[25, 66],[26, 66],[27, 69]])

export const light_pink_alt2_ListItem = n334
const n335 = t([[12, 66],[13, 67],[14, 69],[15, 70],[16, 65],[17, 64],[18, 72],[19, 71],[20, 72],[21, 71],[22, 72],[23, 67],[24, 69],[25, 67],[26, 67],[27, 67]])

export const light_pink_alt2_Card = n335
export const light_pink_alt2_DrawerFrame = n335
export const light_pink_alt2_Progress = n335
export const light_pink_alt2_TooltipArrow = n335
const n336 = t([[12, 67],[13, 69],[14, 70],[15, 71],[16, 66],[17, 65],[18, 72],[19, 71],[20, 72],[21, 71],[22, 71],[23, 67],[24, 69],[25, 67],[26, 67],[27, 66]])

export const light_pink_alt2_Button = n336
export const light_pink_alt2_Switch = n336
export const light_pink_alt2_TooltipContent = n336
export const light_pink_alt2_SliderTrack = n336
const n337 = t([[12, 65],[13, 66],[14, 67],[15, 69],[16, 64],[17, 63],[18, 72],[19, 71],[20, 72],[21, 71],[22, 73],[23, 69],[24, 70],[25, 69],[26, 69],[27, 69]])

export const light_pink_alt2_Checkbox = n337
export const light_pink_alt2_RadioGroupItem = n337
export const light_pink_alt2_Input = n337
export const light_pink_alt2_TextArea = n337
const n338 = t([[12, 73],[13, 72],[14, 71],[15, 70],[16, 11],[17, 11],[18, 64],[19, 65],[20, 64],[21, 65],[22, 62],[23, 72],[24, 71],[25, 72],[26, 72],[27, 65]])

export const light_pink_alt2_SwitchThumb = n338
const n339 = t([[12, 69],[13, 67],[14, 66],[15, 65],[16, 70],[17, 71],[18, 64],[19, 65],[20, 64],[21, 65],[22, 65],[23, 67],[24, 66],[25, 67],[26, 67],[27, 70]])

export const light_pink_alt2_SliderTrackActive = n339
const n340 = t([[12, 71],[13, 70],[14, 69],[15, 67],[16, 72],[17, 73],[18, 64],[19, 65],[20, 64],[21, 65],[22, 63],[23, 70],[24, 69],[25, 70],[26, 70],[27, 67]])

export const light_pink_alt2_SliderThumb = n340
export const light_pink_alt2_Tooltip = n340
export const light_pink_alt2_ProgressIndicator = n340
const n341 = t([[12, 66],[13, 67],[14, 69],[15, 70],[16, 65],[17, 64],[19, 70],[20, 71],[21, 70],[22, 72],[23, 67],[24, 69],[25, 67],[26, 67],[27, 67]])

export const light_pink_active_ListItem = n341
const n342 = t([[12, 69],[13, 70],[14, 71],[15, 72],[16, 67],[17, 66],[19, 70],[20, 71],[21, 70],[22, 70],[23, 69],[24, 70],[25, 69],[26, 69],[27, 65]])

export const light_pink_active_Button = n342
export const light_pink_active_Switch = n342
const n343 = t([[12, 66],[13, 67],[14, 69],[15, 70],[16, 65],[17, 64],[19, 70],[20, 71],[21, 70],[22, 72],[23, 70],[24, 71],[25, 70],[26, 70],[27, 67]])

export const light_pink_active_Checkbox = n343
export const light_pink_active_Input = n343
export const light_pink_active_TextArea = n343
const n344 = t([[12, 67],[13, 66],[14, 65],[15, 64],[16, 69],[17, 70],[19, 66],[20, 65],[21, 66],[22, 66],[23, 66],[24, 65],[25, 66],[26, 66],[27, 71]])

export const light_pink_active_SliderTrackActive = n344
const n345 = t([[12, 88],[13, 89],[14, 90],[15, 91],[16, 87],[17, 86],[18, 97],[19, 96],[20, 97],[21, 96],[22, 11],[23, 90],[24, 91],[25, 90],[26, 90],[27, 94]])

export const light_red_alt1_ListItem = n345
const n346 = t([[12, 89],[13, 90],[14, 91],[15, 93],[16, 88],[17, 87],[18, 97],[19, 96],[20, 97],[21, 96],[22, 97],[23, 91],[24, 93],[25, 91],[26, 91],[27, 93]])

export const light_red_alt1_Card = n346
export const light_red_alt1_DrawerFrame = n346
export const light_red_alt1_Progress = n346
export const light_red_alt1_TooltipArrow = n346
const n347 = t([[12, 90],[13, 91],[14, 93],[15, 94],[16, 89],[17, 88],[18, 97],[19, 96],[20, 97],[21, 96],[22, 96],[23, 91],[24, 93],[25, 91],[26, 91],[27, 91]])

export const light_red_alt1_Button = n347
export const light_red_alt1_Switch = n347
export const light_red_alt1_TooltipContent = n347
export const light_red_alt1_SliderTrack = n347
const n348 = t([[12, 88],[13, 89],[14, 90],[15, 91],[16, 87],[17, 86],[18, 97],[19, 96],[20, 97],[21, 96],[22, 11],[23, 93],[24, 94],[25, 93],[26, 93],[27, 94]])

export const light_red_alt1_Checkbox = n348
export const light_red_alt1_RadioGroupItem = n348
export const light_red_alt1_Input = n348
export const light_red_alt1_TextArea = n348
const n349 = t([[12, 11],[13, 97],[14, 96],[15, 95],[16, 11],[17, 11],[18, 87],[19, 88],[20, 87],[21, 88],[22, 86],[23, 96],[24, 95],[25, 96],[26, 96],[27, 88]])

export const light_red_alt1_SwitchThumb = n349
const n350 = t([[12, 94],[13, 93],[14, 91],[15, 90],[16, 95],[17, 96],[18, 87],[19, 88],[20, 87],[21, 88],[22, 88],[23, 91],[24, 90],[25, 91],[26, 91],[27, 93]])

export const light_red_alt1_SliderTrackActive = n350
const n351 = t([[12, 96],[13, 95],[14, 94],[15, 93],[16, 97],[17, 11],[18, 87],[19, 88],[20, 87],[21, 88],[22, 86],[23, 94],[24, 93],[25, 94],[26, 94],[27, 90]])

export const light_red_alt1_SliderThumb = n351
export const light_red_alt1_Tooltip = n351
export const light_red_alt1_ProgressIndicator = n351
const n352 = t([[12, 89],[13, 90],[14, 91],[15, 93],[16, 88],[17, 87],[18, 96],[19, 95],[20, 96],[21, 95],[22, 97],[23, 90],[24, 91],[25, 90],[26, 90],[27, 93]])

export const light_red_alt2_ListItem = n352
const n353 = t([[12, 90],[13, 91],[14, 93],[15, 94],[16, 89],[17, 88],[18, 96],[19, 95],[20, 96],[21, 95],[22, 96],[23, 91],[24, 93],[25, 91],[26, 91],[27, 91]])

export const light_red_alt2_Card = n353
export const light_red_alt2_DrawerFrame = n353
export const light_red_alt2_Progress = n353
export const light_red_alt2_TooltipArrow = n353
const n354 = t([[12, 91],[13, 93],[14, 94],[15, 95],[16, 90],[17, 89],[18, 96],[19, 95],[20, 96],[21, 95],[22, 95],[23, 91],[24, 93],[25, 91],[26, 91],[27, 90]])

export const light_red_alt2_Button = n354
export const light_red_alt2_Switch = n354
export const light_red_alt2_TooltipContent = n354
export const light_red_alt2_SliderTrack = n354
const n355 = t([[12, 89],[13, 90],[14, 91],[15, 93],[16, 88],[17, 87],[18, 96],[19, 95],[20, 96],[21, 95],[22, 97],[23, 93],[24, 94],[25, 93],[26, 93],[27, 93]])

export const light_red_alt2_Checkbox = n355
export const light_red_alt2_RadioGroupItem = n355
export const light_red_alt2_Input = n355
export const light_red_alt2_TextArea = n355
const n356 = t([[12, 97],[13, 96],[14, 95],[15, 94],[16, 11],[17, 11],[18, 88],[19, 89],[20, 88],[21, 89],[22, 86],[23, 96],[24, 95],[25, 96],[26, 96],[27, 89]])

export const light_red_alt2_SwitchThumb = n356
const n357 = t([[12, 93],[13, 91],[14, 90],[15, 89],[16, 94],[17, 95],[18, 88],[19, 89],[20, 88],[21, 89],[22, 89],[23, 91],[24, 90],[25, 91],[26, 91],[27, 94]])

export const light_red_alt2_SliderTrackActive = n357
const n358 = t([[12, 95],[13, 94],[14, 93],[15, 91],[16, 96],[17, 97],[18, 88],[19, 89],[20, 88],[21, 89],[22, 87],[23, 94],[24, 93],[25, 94],[26, 94],[27, 91]])

export const light_red_alt2_SliderThumb = n358
export const light_red_alt2_Tooltip = n358
export const light_red_alt2_ProgressIndicator = n358
const n359 = t([[12, 90],[13, 91],[14, 93],[15, 94],[16, 89],[17, 88],[19, 94],[20, 95],[21, 94],[22, 96],[23, 91],[24, 93],[25, 91],[26, 91],[27, 91]])

export const light_red_active_ListItem = n359
const n360 = t([[12, 93],[13, 94],[14, 95],[15, 96],[16, 91],[17, 90],[19, 94],[20, 95],[21, 94],[22, 94],[23, 93],[24, 94],[25, 93],[26, 93],[27, 89]])

export const light_red_active_Button = n360
export const light_red_active_Switch = n360
const n361 = t([[12, 90],[13, 91],[14, 93],[15, 94],[16, 89],[17, 88],[19, 94],[20, 95],[21, 94],[22, 96],[23, 94],[24, 95],[25, 94],[26, 94],[27, 91]])

export const light_red_active_Checkbox = n361
export const light_red_active_Input = n361
export const light_red_active_TextArea = n361
const n362 = t([[12, 91],[13, 90],[14, 89],[15, 88],[16, 93],[17, 94],[19, 90],[20, 89],[21, 90],[22, 90],[23, 90],[24, 89],[25, 90],[26, 90],[27, 95]])

export const light_red_active_SliderTrackActive = n362
const n363 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 37],[19, 36],[20, 37],[21, 36],[22, 11],[23, 30],[24, 31],[25, 30],[26, 30],[27, 34]])

export const light_gray_alt1_ListItem = n363
const n364 = t([[12, 29],[13, 30],[14, 31],[15, 33],[16, 28],[17, 27],[18, 37],[19, 36],[20, 37],[21, 36],[22, 37],[23, 31],[24, 33],[25, 31],[26, 31],[27, 33]])

export const light_gray_alt1_Card = n364
export const light_gray_alt1_DrawerFrame = n364
export const light_gray_alt1_Progress = n364
export const light_gray_alt1_TooltipArrow = n364
const n365 = t([[12, 30],[13, 31],[14, 33],[15, 34],[16, 29],[17, 28],[18, 37],[19, 36],[20, 37],[21, 36],[22, 36],[23, 31],[24, 33],[25, 31],[26, 31],[27, 31]])

export const light_gray_alt1_Button = n365
export const light_gray_alt1_Switch = n365
export const light_gray_alt1_TooltipContent = n365
export const light_gray_alt1_SliderTrack = n365
const n366 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 37],[19, 36],[20, 37],[21, 36],[22, 11],[23, 33],[24, 34],[25, 33],[26, 33],[27, 34]])

export const light_gray_alt1_Checkbox = n366
export const light_gray_alt1_RadioGroupItem = n366
export const light_gray_alt1_Input = n366
export const light_gray_alt1_TextArea = n366
const n367 = t([[12, 11],[13, 37],[14, 36],[15, 35],[16, 11],[17, 11],[18, 27],[19, 28],[20, 27],[21, 28],[22, 26],[23, 36],[24, 35],[25, 36],[26, 36],[27, 28]])

export const light_gray_alt1_SwitchThumb = n367
const n368 = t([[12, 34],[13, 33],[14, 31],[15, 30],[16, 35],[17, 36],[18, 27],[19, 28],[20, 27],[21, 28],[22, 28],[23, 31],[24, 30],[25, 31],[26, 31],[27, 33]])

export const light_gray_alt1_SliderTrackActive = n368
const n369 = t([[12, 36],[13, 35],[14, 34],[15, 33],[16, 37],[17, 11],[18, 27],[19, 28],[20, 27],[21, 28],[22, 26],[23, 34],[24, 33],[25, 34],[26, 34],[27, 30]])

export const light_gray_alt1_SliderThumb = n369
export const light_gray_alt1_Tooltip = n369
export const light_gray_alt1_ProgressIndicator = n369
const n370 = t([[12, 29],[13, 30],[14, 31],[15, 33],[16, 28],[17, 27],[18, 36],[19, 35],[20, 36],[21, 35],[22, 37],[23, 30],[24, 31],[25, 30],[26, 30],[27, 33]])

export const light_gray_alt2_ListItem = n370
const n371 = t([[12, 30],[13, 31],[14, 33],[15, 34],[16, 29],[17, 28],[18, 36],[19, 35],[20, 36],[21, 35],[22, 36],[23, 31],[24, 33],[25, 31],[26, 31],[27, 31]])

export const light_gray_alt2_Card = n371
export const light_gray_alt2_DrawerFrame = n371
export const light_gray_alt2_Progress = n371
export const light_gray_alt2_TooltipArrow = n371
const n372 = t([[12, 31],[13, 33],[14, 34],[15, 35],[16, 30],[17, 29],[18, 36],[19, 35],[20, 36],[21, 35],[22, 35],[23, 31],[24, 33],[25, 31],[26, 31],[27, 30]])

export const light_gray_alt2_Button = n372
export const light_gray_alt2_Switch = n372
export const light_gray_alt2_TooltipContent = n372
export const light_gray_alt2_SliderTrack = n372
const n373 = t([[12, 29],[13, 30],[14, 31],[15, 33],[16, 28],[17, 27],[18, 36],[19, 35],[20, 36],[21, 35],[22, 37],[23, 33],[24, 34],[25, 33],[26, 33],[27, 33]])

export const light_gray_alt2_Checkbox = n373
export const light_gray_alt2_RadioGroupItem = n373
export const light_gray_alt2_Input = n373
export const light_gray_alt2_TextArea = n373
const n374 = t([[12, 37],[13, 36],[14, 35],[15, 34],[16, 11],[17, 11],[18, 28],[19, 29],[20, 28],[21, 29],[22, 26],[23, 36],[24, 35],[25, 36],[26, 36],[27, 29]])

export const light_gray_alt2_SwitchThumb = n374
const n375 = t([[12, 33],[13, 31],[14, 30],[15, 29],[16, 34],[17, 35],[18, 28],[19, 29],[20, 28],[21, 29],[22, 29],[23, 31],[24, 30],[25, 31],[26, 31],[27, 34]])

export const light_gray_alt2_SliderTrackActive = n375
const n376 = t([[12, 35],[13, 34],[14, 33],[15, 31],[16, 36],[17, 37],[18, 28],[19, 29],[20, 28],[21, 29],[22, 27],[23, 34],[24, 33],[25, 34],[26, 34],[27, 31]])

export const light_gray_alt2_SliderThumb = n376
export const light_gray_alt2_Tooltip = n376
export const light_gray_alt2_ProgressIndicator = n376
const n377 = t([[12, 30],[13, 31],[14, 33],[15, 34],[16, 29],[17, 28],[19, 34],[20, 35],[21, 34],[22, 36],[23, 31],[24, 33],[25, 31],[26, 31],[27, 31]])

export const light_gray_active_ListItem = n377
const n378 = t([[12, 33],[13, 34],[14, 35],[15, 36],[16, 31],[17, 30],[19, 34],[20, 35],[21, 34],[22, 34],[23, 33],[24, 34],[25, 33],[26, 33],[27, 29]])

export const light_gray_active_Button = n378
export const light_gray_active_Switch = n378
const n379 = t([[12, 30],[13, 31],[14, 33],[15, 34],[16, 29],[17, 28],[19, 34],[20, 35],[21, 34],[22, 36],[23, 34],[24, 35],[25, 34],[26, 34],[27, 31]])

export const light_gray_active_Checkbox = n379
export const light_gray_active_Input = n379
export const light_gray_active_TextArea = n379
const n380 = t([[12, 31],[13, 30],[14, 29],[15, 28],[16, 33],[17, 34],[19, 30],[20, 29],[21, 30],[22, 30],[23, 30],[24, 29],[25, 30],[26, 30],[27, 35]])

export const light_gray_active_SliderTrackActive = n380
const n381 = t([[12, 158],[13, 159],[14, 160],[15, 161],[16, 157],[17, 156],[18, 166],[19, 165],[20, 166],[21, 165],[22, 0],[23, 161],[24, 163],[25, 160],[26, 161],[27, 58]])

export const dark_orange_alt1_ListItem = n381
const n382 = t([[12, 159],[13, 160],[14, 161],[15, 163],[16, 158],[17, 157],[18, 166],[19, 165],[20, 166],[21, 165],[22, 166],[23, 163],[24, 58],[25, 161],[26, 163],[27, 163]])

export const dark_orange_alt1_Card = n382
export const dark_orange_alt1_DrawerFrame = n382
export const dark_orange_alt1_Progress = n382
export const dark_orange_alt1_TooltipArrow = n382
const n383 = t([[12, 160],[13, 161],[14, 163],[15, 58],[16, 159],[17, 158],[18, 166],[19, 165],[20, 166],[21, 165],[22, 165],[23, 163],[24, 58],[25, 161],[26, 163],[27, 161]])

export const dark_orange_alt1_Button = n383
export const dark_orange_alt1_Switch = n383
export const dark_orange_alt1_TooltipContent = n383
export const dark_orange_alt1_SliderTrack = n383
const n384 = t([[12, 158],[13, 159],[14, 160],[15, 161],[16, 157],[17, 156],[18, 166],[19, 165],[20, 166],[21, 165],[22, 0],[23, 58],[24, 164],[25, 163],[26, 58],[27, 58]])

export const dark_orange_alt1_Checkbox = n384
export const dark_orange_alt1_RadioGroupItem = n384
export const dark_orange_alt1_Input = n384
export const dark_orange_alt1_TextArea = n384
const n385 = t([[12, 0],[13, 166],[14, 165],[15, 164],[16, 0],[17, 0],[18, 157],[19, 158],[20, 157],[21, 158],[22, 156],[23, 164],[24, 58],[25, 165],[26, 164],[27, 158]])

export const dark_orange_alt1_SwitchThumb = n385
const n386 = t([[12, 58],[13, 163],[14, 161],[15, 160],[16, 164],[17, 165],[18, 157],[19, 158],[20, 157],[21, 158],[22, 158],[23, 160],[24, 159],[25, 161],[26, 160],[27, 163]])

export const dark_orange_alt1_SliderTrackActive = n386
const n387 = t([[12, 165],[13, 164],[14, 58],[15, 163],[16, 166],[17, 0],[18, 157],[19, 158],[20, 157],[21, 158],[22, 156],[23, 163],[24, 161],[25, 58],[26, 163],[27, 160]])

export const dark_orange_alt1_SliderThumb = n387
export const dark_orange_alt1_Tooltip = n387
export const dark_orange_alt1_ProgressIndicator = n387
const n388 = t([[12, 159],[13, 160],[14, 161],[15, 163],[16, 158],[17, 157],[18, 165],[19, 164],[20, 165],[21, 164],[22, 166],[23, 161],[24, 163],[25, 160],[26, 161],[27, 163]])

export const dark_orange_alt2_ListItem = n388
const n389 = t([[12, 160],[13, 161],[14, 163],[15, 58],[16, 159],[17, 158],[18, 165],[19, 164],[20, 165],[21, 164],[22, 165],[23, 163],[24, 58],[25, 161],[26, 163],[27, 161]])

export const dark_orange_alt2_Card = n389
export const dark_orange_alt2_DrawerFrame = n389
export const dark_orange_alt2_Progress = n389
export const dark_orange_alt2_TooltipArrow = n389
const n390 = t([[12, 161],[13, 163],[14, 58],[15, 164],[16, 160],[17, 159],[18, 165],[19, 164],[20, 165],[21, 164],[22, 164],[23, 163],[24, 58],[25, 161],[26, 163],[27, 160]])

export const dark_orange_alt2_Button = n390
export const dark_orange_alt2_Switch = n390
export const dark_orange_alt2_TooltipContent = n390
export const dark_orange_alt2_SliderTrack = n390
const n391 = t([[12, 159],[13, 160],[14, 161],[15, 163],[16, 158],[17, 157],[18, 165],[19, 164],[20, 165],[21, 164],[22, 166],[23, 58],[24, 164],[25, 163],[26, 58],[27, 163]])

export const dark_orange_alt2_Checkbox = n391
export const dark_orange_alt2_RadioGroupItem = n391
export const dark_orange_alt2_Input = n391
export const dark_orange_alt2_TextArea = n391
const n392 = t([[12, 166],[13, 165],[14, 164],[15, 58],[16, 0],[17, 0],[18, 158],[19, 159],[20, 158],[21, 159],[22, 156],[23, 164],[24, 58],[25, 165],[26, 164],[27, 159]])

export const dark_orange_alt2_SwitchThumb = n392
const n393 = t([[12, 163],[13, 161],[14, 160],[15, 159],[16, 58],[17, 164],[18, 158],[19, 159],[20, 158],[21, 159],[22, 159],[23, 160],[24, 159],[25, 161],[26, 160],[27, 58]])

export const dark_orange_alt2_SliderTrackActive = n393
const n394 = t([[12, 164],[13, 58],[14, 163],[15, 161],[16, 165],[17, 166],[18, 158],[19, 159],[20, 158],[21, 159],[22, 157],[23, 163],[24, 161],[25, 58],[26, 163],[27, 161]])

export const dark_orange_alt2_SliderThumb = n394
export const dark_orange_alt2_Tooltip = n394
export const dark_orange_alt2_ProgressIndicator = n394
const n395 = t([[12, 160],[13, 161],[14, 163],[15, 58],[16, 159],[17, 158],[19, 58],[20, 164],[21, 58],[22, 165],[23, 163],[24, 58],[25, 161],[26, 163],[27, 161]])

export const dark_orange_active_ListItem = n395
const n396 = t([[12, 163],[13, 58],[14, 164],[15, 165],[16, 161],[17, 160],[19, 58],[20, 164],[21, 58],[22, 58],[23, 58],[24, 164],[25, 163],[26, 58],[27, 159]])

export const dark_orange_active_Button = n396
export const dark_orange_active_Switch = n396
const n397 = t([[12, 160],[13, 161],[14, 163],[15, 58],[16, 159],[17, 158],[19, 58],[20, 164],[21, 58],[22, 165],[23, 164],[24, 165],[25, 58],[26, 164],[27, 161]])

export const dark_orange_active_Checkbox = n397
export const dark_orange_active_Input = n397
export const dark_orange_active_TextArea = n397
const n398 = t([[12, 161],[13, 160],[14, 159],[15, 158],[16, 163],[17, 58],[19, 160],[20, 159],[21, 160],[22, 160],[23, 159],[24, 158],[25, 160],[26, 159],[27, 164]])

export const dark_orange_active_SliderTrackActive = n398
const n399 = t([[12, 202],[13, 203],[14, 204],[15, 205],[16, 201],[17, 200],[18, 210],[19, 209],[20, 210],[21, 209],[22, 0],[23, 205],[24, 207],[25, 204],[26, 205],[27, 106]])

export const dark_yellow_alt1_ListItem = n399
const n400 = t([[12, 203],[13, 204],[14, 205],[15, 207],[16, 202],[17, 201],[18, 210],[19, 209],[20, 210],[21, 209],[22, 210],[23, 207],[24, 106],[25, 205],[26, 207],[27, 207]])

export const dark_yellow_alt1_Card = n400
export const dark_yellow_alt1_DrawerFrame = n400
export const dark_yellow_alt1_Progress = n400
export const dark_yellow_alt1_TooltipArrow = n400
const n401 = t([[12, 204],[13, 205],[14, 207],[15, 106],[16, 203],[17, 202],[18, 210],[19, 209],[20, 210],[21, 209],[22, 209],[23, 207],[24, 106],[25, 205],[26, 207],[27, 205]])

export const dark_yellow_alt1_Button = n401
export const dark_yellow_alt1_Switch = n401
export const dark_yellow_alt1_TooltipContent = n401
export const dark_yellow_alt1_SliderTrack = n401
const n402 = t([[12, 202],[13, 203],[14, 204],[15, 205],[16, 201],[17, 200],[18, 210],[19, 209],[20, 210],[21, 209],[22, 0],[23, 106],[24, 208],[25, 207],[26, 106],[27, 106]])

export const dark_yellow_alt1_Checkbox = n402
export const dark_yellow_alt1_RadioGroupItem = n402
export const dark_yellow_alt1_Input = n402
export const dark_yellow_alt1_TextArea = n402
const n403 = t([[12, 0],[13, 210],[14, 209],[15, 208],[16, 0],[17, 0],[18, 201],[19, 202],[20, 201],[21, 202],[22, 200],[23, 208],[24, 106],[25, 209],[26, 208],[27, 202]])

export const dark_yellow_alt1_SwitchThumb = n403
const n404 = t([[12, 106],[13, 207],[14, 205],[15, 204],[16, 208],[17, 209],[18, 201],[19, 202],[20, 201],[21, 202],[22, 202],[23, 204],[24, 203],[25, 205],[26, 204],[27, 207]])

export const dark_yellow_alt1_SliderTrackActive = n404
const n405 = t([[12, 209],[13, 208],[14, 106],[15, 207],[16, 210],[17, 0],[18, 201],[19, 202],[20, 201],[21, 202],[22, 200],[23, 207],[24, 205],[25, 106],[26, 207],[27, 204]])

export const dark_yellow_alt1_SliderThumb = n405
export const dark_yellow_alt1_Tooltip = n405
export const dark_yellow_alt1_ProgressIndicator = n405
const n406 = t([[12, 203],[13, 204],[14, 205],[15, 207],[16, 202],[17, 201],[18, 209],[19, 208],[20, 209],[21, 208],[22, 210],[23, 205],[24, 207],[25, 204],[26, 205],[27, 207]])

export const dark_yellow_alt2_ListItem = n406
const n407 = t([[12, 204],[13, 205],[14, 207],[15, 106],[16, 203],[17, 202],[18, 209],[19, 208],[20, 209],[21, 208],[22, 209],[23, 207],[24, 106],[25, 205],[26, 207],[27, 205]])

export const dark_yellow_alt2_Card = n407
export const dark_yellow_alt2_DrawerFrame = n407
export const dark_yellow_alt2_Progress = n407
export const dark_yellow_alt2_TooltipArrow = n407
const n408 = t([[12, 205],[13, 207],[14, 106],[15, 208],[16, 204],[17, 203],[18, 209],[19, 208],[20, 209],[21, 208],[22, 208],[23, 207],[24, 106],[25, 205],[26, 207],[27, 204]])

export const dark_yellow_alt2_Button = n408
export const dark_yellow_alt2_Switch = n408
export const dark_yellow_alt2_TooltipContent = n408
export const dark_yellow_alt2_SliderTrack = n408
const n409 = t([[12, 203],[13, 204],[14, 205],[15, 207],[16, 202],[17, 201],[18, 209],[19, 208],[20, 209],[21, 208],[22, 210],[23, 106],[24, 208],[25, 207],[26, 106],[27, 207]])

export const dark_yellow_alt2_Checkbox = n409
export const dark_yellow_alt2_RadioGroupItem = n409
export const dark_yellow_alt2_Input = n409
export const dark_yellow_alt2_TextArea = n409
const n410 = t([[12, 210],[13, 209],[14, 208],[15, 106],[16, 0],[17, 0],[18, 202],[19, 203],[20, 202],[21, 203],[22, 200],[23, 208],[24, 106],[25, 209],[26, 208],[27, 203]])

export const dark_yellow_alt2_SwitchThumb = n410
const n411 = t([[12, 207],[13, 205],[14, 204],[15, 203],[16, 106],[17, 208],[18, 202],[19, 203],[20, 202],[21, 203],[22, 203],[23, 204],[24, 203],[25, 205],[26, 204],[27, 106]])

export const dark_yellow_alt2_SliderTrackActive = n411
const n412 = t([[12, 208],[13, 106],[14, 207],[15, 205],[16, 209],[17, 210],[18, 202],[19, 203],[20, 202],[21, 203],[22, 201],[23, 207],[24, 205],[25, 106],[26, 207],[27, 205]])

export const dark_yellow_alt2_SliderThumb = n412
export const dark_yellow_alt2_Tooltip = n412
export const dark_yellow_alt2_ProgressIndicator = n412
const n413 = t([[12, 204],[13, 205],[14, 207],[15, 106],[16, 203],[17, 202],[19, 106],[20, 208],[21, 106],[22, 209],[23, 207],[24, 106],[25, 205],[26, 207],[27, 205]])

export const dark_yellow_active_ListItem = n413
const n414 = t([[12, 207],[13, 106],[14, 208],[15, 209],[16, 205],[17, 204],[19, 106],[20, 208],[21, 106],[22, 106],[23, 106],[24, 208],[25, 207],[26, 106],[27, 203]])

export const dark_yellow_active_Button = n414
export const dark_yellow_active_Switch = n414
const n415 = t([[12, 204],[13, 205],[14, 207],[15, 106],[16, 203],[17, 202],[19, 106],[20, 208],[21, 106],[22, 209],[23, 208],[24, 209],[25, 106],[26, 208],[27, 205]])

export const dark_yellow_active_Checkbox = n415
export const dark_yellow_active_Input = n415
export const dark_yellow_active_TextArea = n415
const n416 = t([[12, 205],[13, 204],[14, 203],[15, 202],[16, 207],[17, 106],[19, 204],[20, 203],[21, 204],[22, 204],[23, 203],[24, 202],[25, 204],[26, 203],[27, 208]])

export const dark_yellow_active_SliderTrackActive = n416
const n417 = t([[12, 147],[13, 148],[14, 149],[15, 150],[16, 146],[17, 145],[18, 155],[19, 154],[20, 155],[21, 154],[22, 0],[23, 150],[24, 152],[25, 149],[26, 150],[27, 46]])

export const dark_green_alt1_ListItem = n417
const n418 = t([[12, 148],[13, 149],[14, 150],[15, 152],[16, 147],[17, 146],[18, 155],[19, 154],[20, 155],[21, 154],[22, 155],[23, 152],[24, 46],[25, 150],[26, 152],[27, 152]])

export const dark_green_alt1_Card = n418
export const dark_green_alt1_DrawerFrame = n418
export const dark_green_alt1_Progress = n418
export const dark_green_alt1_TooltipArrow = n418
const n419 = t([[12, 149],[13, 150],[14, 152],[15, 46],[16, 148],[17, 147],[18, 155],[19, 154],[20, 155],[21, 154],[22, 154],[23, 152],[24, 46],[25, 150],[26, 152],[27, 150]])

export const dark_green_alt1_Button = n419
export const dark_green_alt1_Switch = n419
export const dark_green_alt1_TooltipContent = n419
export const dark_green_alt1_SliderTrack = n419
const n420 = t([[12, 147],[13, 148],[14, 149],[15, 150],[16, 146],[17, 145],[18, 155],[19, 154],[20, 155],[21, 154],[22, 0],[23, 46],[24, 153],[25, 152],[26, 46],[27, 46]])

export const dark_green_alt1_Checkbox = n420
export const dark_green_alt1_RadioGroupItem = n420
export const dark_green_alt1_Input = n420
export const dark_green_alt1_TextArea = n420
const n421 = t([[12, 0],[13, 155],[14, 154],[15, 153],[16, 0],[17, 0],[18, 146],[19, 147],[20, 146],[21, 147],[22, 145],[23, 153],[24, 46],[25, 154],[26, 153],[27, 147]])

export const dark_green_alt1_SwitchThumb = n421
const n422 = t([[12, 46],[13, 152],[14, 150],[15, 149],[16, 153],[17, 154],[18, 146],[19, 147],[20, 146],[21, 147],[22, 147],[23, 149],[24, 148],[25, 150],[26, 149],[27, 152]])

export const dark_green_alt1_SliderTrackActive = n422
const n423 = t([[12, 154],[13, 153],[14, 46],[15, 152],[16, 155],[17, 0],[18, 146],[19, 147],[20, 146],[21, 147],[22, 145],[23, 152],[24, 150],[25, 46],[26, 152],[27, 149]])

export const dark_green_alt1_SliderThumb = n423
export const dark_green_alt1_Tooltip = n423
export const dark_green_alt1_ProgressIndicator = n423
const n424 = t([[12, 148],[13, 149],[14, 150],[15, 152],[16, 147],[17, 146],[18, 154],[19, 153],[20, 154],[21, 153],[22, 155],[23, 150],[24, 152],[25, 149],[26, 150],[27, 152]])

export const dark_green_alt2_ListItem = n424
const n425 = t([[12, 149],[13, 150],[14, 152],[15, 46],[16, 148],[17, 147],[18, 154],[19, 153],[20, 154],[21, 153],[22, 154],[23, 152],[24, 46],[25, 150],[26, 152],[27, 150]])

export const dark_green_alt2_Card = n425
export const dark_green_alt2_DrawerFrame = n425
export const dark_green_alt2_Progress = n425
export const dark_green_alt2_TooltipArrow = n425
const n426 = t([[12, 150],[13, 152],[14, 46],[15, 153],[16, 149],[17, 148],[18, 154],[19, 153],[20, 154],[21, 153],[22, 153],[23, 152],[24, 46],[25, 150],[26, 152],[27, 149]])

export const dark_green_alt2_Button = n426
export const dark_green_alt2_Switch = n426
export const dark_green_alt2_TooltipContent = n426
export const dark_green_alt2_SliderTrack = n426
const n427 = t([[12, 148],[13, 149],[14, 150],[15, 152],[16, 147],[17, 146],[18, 154],[19, 153],[20, 154],[21, 153],[22, 155],[23, 46],[24, 153],[25, 152],[26, 46],[27, 152]])

export const dark_green_alt2_Checkbox = n427
export const dark_green_alt2_RadioGroupItem = n427
export const dark_green_alt2_Input = n427
export const dark_green_alt2_TextArea = n427
const n428 = t([[12, 155],[13, 154],[14, 153],[15, 46],[16, 0],[17, 0],[18, 147],[19, 148],[20, 147],[21, 148],[22, 145],[23, 153],[24, 46],[25, 154],[26, 153],[27, 148]])

export const dark_green_alt2_SwitchThumb = n428
const n429 = t([[12, 152],[13, 150],[14, 149],[15, 148],[16, 46],[17, 153],[18, 147],[19, 148],[20, 147],[21, 148],[22, 148],[23, 149],[24, 148],[25, 150],[26, 149],[27, 46]])

export const dark_green_alt2_SliderTrackActive = n429
const n430 = t([[12, 153],[13, 46],[14, 152],[15, 150],[16, 154],[17, 155],[18, 147],[19, 148],[20, 147],[21, 148],[22, 146],[23, 152],[24, 150],[25, 46],[26, 152],[27, 150]])

export const dark_green_alt2_SliderThumb = n430
export const dark_green_alt2_Tooltip = n430
export const dark_green_alt2_ProgressIndicator = n430
const n431 = t([[12, 149],[13, 150],[14, 152],[15, 46],[16, 148],[17, 147],[19, 46],[20, 153],[21, 46],[22, 154],[23, 152],[24, 46],[25, 150],[26, 152],[27, 150]])

export const dark_green_active_ListItem = n431
const n432 = t([[12, 152],[13, 46],[14, 153],[15, 154],[16, 150],[17, 149],[19, 46],[20, 153],[21, 46],[22, 46],[23, 46],[24, 153],[25, 152],[26, 46],[27, 148]])

export const dark_green_active_Button = n432
export const dark_green_active_Switch = n432
const n433 = t([[12, 149],[13, 150],[14, 152],[15, 46],[16, 148],[17, 147],[19, 46],[20, 153],[21, 46],[22, 154],[23, 153],[24, 154],[25, 46],[26, 153],[27, 150]])

export const dark_green_active_Checkbox = n433
export const dark_green_active_Input = n433
export const dark_green_active_TextArea = n433
const n434 = t([[12, 150],[13, 149],[14, 148],[15, 147],[16, 152],[17, 46],[19, 149],[20, 148],[21, 149],[22, 149],[23, 148],[24, 147],[25, 149],[26, 148],[27, 153]])

export const dark_green_active_SliderTrackActive = n434
const n435 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[18, 133],[19, 132],[20, 133],[21, 132],[22, 0],[23, 128],[24, 130],[25, 127],[26, 128],[27, 22]])

export const dark_blue_alt1_ListItem = n435
const n436 = t([[12, 126],[13, 127],[14, 128],[15, 130],[16, 125],[17, 124],[18, 133],[19, 132],[20, 133],[21, 132],[22, 133],[23, 130],[24, 22],[25, 128],[26, 130],[27, 130]])

export const dark_blue_alt1_Card = n436
export const dark_blue_alt1_DrawerFrame = n436
export const dark_blue_alt1_Progress = n436
export const dark_blue_alt1_TooltipArrow = n436
const n437 = t([[12, 127],[13, 128],[14, 130],[15, 22],[16, 126],[17, 125],[18, 133],[19, 132],[20, 133],[21, 132],[22, 132],[23, 130],[24, 22],[25, 128],[26, 130],[27, 128]])

export const dark_blue_alt1_Button = n437
export const dark_blue_alt1_Switch = n437
export const dark_blue_alt1_TooltipContent = n437
export const dark_blue_alt1_SliderTrack = n437
const n438 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[18, 133],[19, 132],[20, 133],[21, 132],[22, 0],[23, 22],[24, 131],[25, 130],[26, 22],[27, 22]])

export const dark_blue_alt1_Checkbox = n438
export const dark_blue_alt1_RadioGroupItem = n438
export const dark_blue_alt1_Input = n438
export const dark_blue_alt1_TextArea = n438
const n439 = t([[12, 0],[13, 133],[14, 132],[15, 131],[16, 0],[17, 0],[18, 124],[19, 125],[20, 124],[21, 125],[22, 123],[23, 131],[24, 22],[25, 132],[26, 131],[27, 125]])

export const dark_blue_alt1_SwitchThumb = n439
const n440 = t([[12, 22],[13, 130],[14, 128],[15, 127],[16, 131],[17, 132],[18, 124],[19, 125],[20, 124],[21, 125],[22, 125],[23, 127],[24, 126],[25, 128],[26, 127],[27, 130]])

export const dark_blue_alt1_SliderTrackActive = n440
const n441 = t([[12, 132],[13, 131],[14, 22],[15, 130],[16, 133],[17, 0],[18, 124],[19, 125],[20, 124],[21, 125],[22, 123],[23, 130],[24, 128],[25, 22],[26, 130],[27, 127]])

export const dark_blue_alt1_SliderThumb = n441
export const dark_blue_alt1_Tooltip = n441
export const dark_blue_alt1_ProgressIndicator = n441
const n442 = t([[12, 126],[13, 127],[14, 128],[15, 130],[16, 125],[17, 124],[18, 132],[19, 131],[20, 132],[21, 131],[22, 133],[23, 128],[24, 130],[25, 127],[26, 128],[27, 130]])

export const dark_blue_alt2_ListItem = n442
const n443 = t([[12, 127],[13, 128],[14, 130],[15, 22],[16, 126],[17, 125],[18, 132],[19, 131],[20, 132],[21, 131],[22, 132],[23, 130],[24, 22],[25, 128],[26, 130],[27, 128]])

export const dark_blue_alt2_Card = n443
export const dark_blue_alt2_DrawerFrame = n443
export const dark_blue_alt2_Progress = n443
export const dark_blue_alt2_TooltipArrow = n443
const n444 = t([[12, 128],[13, 130],[14, 22],[15, 131],[16, 127],[17, 126],[18, 132],[19, 131],[20, 132],[21, 131],[22, 131],[23, 130],[24, 22],[25, 128],[26, 130],[27, 127]])

export const dark_blue_alt2_Button = n444
export const dark_blue_alt2_Switch = n444
export const dark_blue_alt2_TooltipContent = n444
export const dark_blue_alt2_SliderTrack = n444
const n445 = t([[12, 126],[13, 127],[14, 128],[15, 130],[16, 125],[17, 124],[18, 132],[19, 131],[20, 132],[21, 131],[22, 133],[23, 22],[24, 131],[25, 130],[26, 22],[27, 130]])

export const dark_blue_alt2_Checkbox = n445
export const dark_blue_alt2_RadioGroupItem = n445
export const dark_blue_alt2_Input = n445
export const dark_blue_alt2_TextArea = n445
const n446 = t([[12, 133],[13, 132],[14, 131],[15, 22],[16, 0],[17, 0],[18, 125],[19, 126],[20, 125],[21, 126],[22, 123],[23, 131],[24, 22],[25, 132],[26, 131],[27, 126]])

export const dark_blue_alt2_SwitchThumb = n446
const n447 = t([[12, 130],[13, 128],[14, 127],[15, 126],[16, 22],[17, 131],[18, 125],[19, 126],[20, 125],[21, 126],[22, 126],[23, 127],[24, 126],[25, 128],[26, 127],[27, 22]])

export const dark_blue_alt2_SliderTrackActive = n447
const n448 = t([[12, 131],[13, 22],[14, 130],[15, 128],[16, 132],[17, 133],[18, 125],[19, 126],[20, 125],[21, 126],[22, 124],[23, 130],[24, 128],[25, 22],[26, 130],[27, 128]])

export const dark_blue_alt2_SliderThumb = n448
export const dark_blue_alt2_Tooltip = n448
export const dark_blue_alt2_ProgressIndicator = n448
const n449 = t([[12, 127],[13, 128],[14, 130],[15, 22],[16, 126],[17, 125],[19, 22],[20, 131],[21, 22],[22, 132],[23, 130],[24, 22],[25, 128],[26, 130],[27, 128]])

export const dark_blue_active_ListItem = n449
const n450 = t([[12, 130],[13, 22],[14, 131],[15, 132],[16, 128],[17, 127],[19, 22],[20, 131],[21, 22],[22, 22],[23, 22],[24, 131],[25, 130],[26, 22],[27, 126]])

export const dark_blue_active_Button = n450
export const dark_blue_active_Switch = n450
const n451 = t([[12, 127],[13, 128],[14, 130],[15, 22],[16, 126],[17, 125],[19, 22],[20, 131],[21, 22],[22, 132],[23, 131],[24, 132],[25, 22],[26, 131],[27, 128]])

export const dark_blue_active_Checkbox = n451
export const dark_blue_active_Input = n451
export const dark_blue_active_TextArea = n451
const n452 = t([[12, 128],[13, 127],[14, 126],[15, 125],[16, 130],[17, 22],[19, 127],[20, 126],[21, 127],[22, 127],[23, 126],[24, 125],[25, 127],[26, 126],[27, 131]])

export const dark_blue_active_SliderTrackActive = n452
const n453 = t([[12, 180],[13, 181],[14, 182],[15, 183],[16, 179],[17, 178],[18, 188],[19, 187],[20, 188],[21, 187],[22, 0],[23, 183],[24, 185],[25, 182],[26, 183],[27, 82]])

export const dark_purple_alt1_ListItem = n453
const n454 = t([[12, 181],[13, 182],[14, 183],[15, 185],[16, 180],[17, 179],[18, 188],[19, 187],[20, 188],[21, 187],[22, 188],[23, 185],[24, 82],[25, 183],[26, 185],[27, 185]])

export const dark_purple_alt1_Card = n454
export const dark_purple_alt1_DrawerFrame = n454
export const dark_purple_alt1_Progress = n454
export const dark_purple_alt1_TooltipArrow = n454
const n455 = t([[12, 182],[13, 183],[14, 185],[15, 82],[16, 181],[17, 180],[18, 188],[19, 187],[20, 188],[21, 187],[22, 187],[23, 185],[24, 82],[25, 183],[26, 185],[27, 183]])

export const dark_purple_alt1_Button = n455
export const dark_purple_alt1_Switch = n455
export const dark_purple_alt1_TooltipContent = n455
export const dark_purple_alt1_SliderTrack = n455
const n456 = t([[12, 180],[13, 181],[14, 182],[15, 183],[16, 179],[17, 178],[18, 188],[19, 187],[20, 188],[21, 187],[22, 0],[23, 82],[24, 186],[25, 185],[26, 82],[27, 82]])

export const dark_purple_alt1_Checkbox = n456
export const dark_purple_alt1_RadioGroupItem = n456
export const dark_purple_alt1_Input = n456
export const dark_purple_alt1_TextArea = n456
const n457 = t([[12, 0],[13, 188],[14, 187],[15, 186],[16, 0],[17, 0],[18, 179],[19, 180],[20, 179],[21, 180],[22, 178],[23, 186],[24, 82],[25, 187],[26, 186],[27, 180]])

export const dark_purple_alt1_SwitchThumb = n457
const n458 = t([[12, 82],[13, 185],[14, 183],[15, 182],[16, 186],[17, 187],[18, 179],[19, 180],[20, 179],[21, 180],[22, 180],[23, 182],[24, 181],[25, 183],[26, 182],[27, 185]])

export const dark_purple_alt1_SliderTrackActive = n458
const n459 = t([[12, 187],[13, 186],[14, 82],[15, 185],[16, 188],[17, 0],[18, 179],[19, 180],[20, 179],[21, 180],[22, 178],[23, 185],[24, 183],[25, 82],[26, 185],[27, 182]])

export const dark_purple_alt1_SliderThumb = n459
export const dark_purple_alt1_Tooltip = n459
export const dark_purple_alt1_ProgressIndicator = n459
const n460 = t([[12, 181],[13, 182],[14, 183],[15, 185],[16, 180],[17, 179],[18, 187],[19, 186],[20, 187],[21, 186],[22, 188],[23, 183],[24, 185],[25, 182],[26, 183],[27, 185]])

export const dark_purple_alt2_ListItem = n460
const n461 = t([[12, 182],[13, 183],[14, 185],[15, 82],[16, 181],[17, 180],[18, 187],[19, 186],[20, 187],[21, 186],[22, 187],[23, 185],[24, 82],[25, 183],[26, 185],[27, 183]])

export const dark_purple_alt2_Card = n461
export const dark_purple_alt2_DrawerFrame = n461
export const dark_purple_alt2_Progress = n461
export const dark_purple_alt2_TooltipArrow = n461
const n462 = t([[12, 183],[13, 185],[14, 82],[15, 186],[16, 182],[17, 181],[18, 187],[19, 186],[20, 187],[21, 186],[22, 186],[23, 185],[24, 82],[25, 183],[26, 185],[27, 182]])

export const dark_purple_alt2_Button = n462
export const dark_purple_alt2_Switch = n462
export const dark_purple_alt2_TooltipContent = n462
export const dark_purple_alt2_SliderTrack = n462
const n463 = t([[12, 181],[13, 182],[14, 183],[15, 185],[16, 180],[17, 179],[18, 187],[19, 186],[20, 187],[21, 186],[22, 188],[23, 82],[24, 186],[25, 185],[26, 82],[27, 185]])

export const dark_purple_alt2_Checkbox = n463
export const dark_purple_alt2_RadioGroupItem = n463
export const dark_purple_alt2_Input = n463
export const dark_purple_alt2_TextArea = n463
const n464 = t([[12, 188],[13, 187],[14, 186],[15, 82],[16, 0],[17, 0],[18, 180],[19, 181],[20, 180],[21, 181],[22, 178],[23, 186],[24, 82],[25, 187],[26, 186],[27, 181]])

export const dark_purple_alt2_SwitchThumb = n464
const n465 = t([[12, 185],[13, 183],[14, 182],[15, 181],[16, 82],[17, 186],[18, 180],[19, 181],[20, 180],[21, 181],[22, 181],[23, 182],[24, 181],[25, 183],[26, 182],[27, 82]])

export const dark_purple_alt2_SliderTrackActive = n465
const n466 = t([[12, 186],[13, 82],[14, 185],[15, 183],[16, 187],[17, 188],[18, 180],[19, 181],[20, 180],[21, 181],[22, 179],[23, 185],[24, 183],[25, 82],[26, 185],[27, 183]])

export const dark_purple_alt2_SliderThumb = n466
export const dark_purple_alt2_Tooltip = n466
export const dark_purple_alt2_ProgressIndicator = n466
const n467 = t([[12, 182],[13, 183],[14, 185],[15, 82],[16, 181],[17, 180],[19, 82],[20, 186],[21, 82],[22, 187],[23, 185],[24, 82],[25, 183],[26, 185],[27, 183]])

export const dark_purple_active_ListItem = n467
const n468 = t([[12, 185],[13, 82],[14, 186],[15, 187],[16, 183],[17, 182],[19, 82],[20, 186],[21, 82],[22, 82],[23, 82],[24, 186],[25, 185],[26, 82],[27, 181]])

export const dark_purple_active_Button = n468
export const dark_purple_active_Switch = n468
const n469 = t([[12, 182],[13, 183],[14, 185],[15, 82],[16, 181],[17, 180],[19, 82],[20, 186],[21, 82],[22, 187],[23, 186],[24, 187],[25, 82],[26, 186],[27, 183]])

export const dark_purple_active_Checkbox = n469
export const dark_purple_active_Input = n469
export const dark_purple_active_TextArea = n469
const n470 = t([[12, 183],[13, 182],[14, 181],[15, 180],[16, 185],[17, 82],[19, 182],[20, 181],[21, 182],[22, 182],[23, 181],[24, 180],[25, 182],[26, 181],[27, 186]])

export const dark_purple_active_SliderTrackActive = n470
const n471 = t([[12, 169],[13, 170],[14, 171],[15, 172],[16, 168],[17, 167],[18, 177],[19, 176],[20, 177],[21, 176],[22, 0],[23, 172],[24, 174],[25, 171],[26, 172],[27, 70]])

export const dark_pink_alt1_ListItem = n471
const n472 = t([[12, 170],[13, 171],[14, 172],[15, 174],[16, 169],[17, 168],[18, 177],[19, 176],[20, 177],[21, 176],[22, 177],[23, 174],[24, 70],[25, 172],[26, 174],[27, 174]])

export const dark_pink_alt1_Card = n472
export const dark_pink_alt1_DrawerFrame = n472
export const dark_pink_alt1_Progress = n472
export const dark_pink_alt1_TooltipArrow = n472
const n473 = t([[12, 171],[13, 172],[14, 174],[15, 70],[16, 170],[17, 169],[18, 177],[19, 176],[20, 177],[21, 176],[22, 176],[23, 174],[24, 70],[25, 172],[26, 174],[27, 172]])

export const dark_pink_alt1_Button = n473
export const dark_pink_alt1_Switch = n473
export const dark_pink_alt1_TooltipContent = n473
export const dark_pink_alt1_SliderTrack = n473
const n474 = t([[12, 169],[13, 170],[14, 171],[15, 172],[16, 168],[17, 167],[18, 177],[19, 176],[20, 177],[21, 176],[22, 0],[23, 70],[24, 175],[25, 174],[26, 70],[27, 70]])

export const dark_pink_alt1_Checkbox = n474
export const dark_pink_alt1_RadioGroupItem = n474
export const dark_pink_alt1_Input = n474
export const dark_pink_alt1_TextArea = n474
const n475 = t([[12, 0],[13, 177],[14, 176],[15, 175],[16, 0],[17, 0],[18, 168],[19, 169],[20, 168],[21, 169],[22, 167],[23, 175],[24, 70],[25, 176],[26, 175],[27, 169]])

export const dark_pink_alt1_SwitchThumb = n475
const n476 = t([[12, 70],[13, 174],[14, 172],[15, 171],[16, 175],[17, 176],[18, 168],[19, 169],[20, 168],[21, 169],[22, 169],[23, 171],[24, 170],[25, 172],[26, 171],[27, 174]])

export const dark_pink_alt1_SliderTrackActive = n476
const n477 = t([[12, 176],[13, 175],[14, 70],[15, 174],[16, 177],[17, 0],[18, 168],[19, 169],[20, 168],[21, 169],[22, 167],[23, 174],[24, 172],[25, 70],[26, 174],[27, 171]])

export const dark_pink_alt1_SliderThumb = n477
export const dark_pink_alt1_Tooltip = n477
export const dark_pink_alt1_ProgressIndicator = n477
const n478 = t([[12, 170],[13, 171],[14, 172],[15, 174],[16, 169],[17, 168],[18, 176],[19, 175],[20, 176],[21, 175],[22, 177],[23, 172],[24, 174],[25, 171],[26, 172],[27, 174]])

export const dark_pink_alt2_ListItem = n478
const n479 = t([[12, 171],[13, 172],[14, 174],[15, 70],[16, 170],[17, 169],[18, 176],[19, 175],[20, 176],[21, 175],[22, 176],[23, 174],[24, 70],[25, 172],[26, 174],[27, 172]])

export const dark_pink_alt2_Card = n479
export const dark_pink_alt2_DrawerFrame = n479
export const dark_pink_alt2_Progress = n479
export const dark_pink_alt2_TooltipArrow = n479
const n480 = t([[12, 172],[13, 174],[14, 70],[15, 175],[16, 171],[17, 170],[18, 176],[19, 175],[20, 176],[21, 175],[22, 175],[23, 174],[24, 70],[25, 172],[26, 174],[27, 171]])

export const dark_pink_alt2_Button = n480
export const dark_pink_alt2_Switch = n480
export const dark_pink_alt2_TooltipContent = n480
export const dark_pink_alt2_SliderTrack = n480
const n481 = t([[12, 170],[13, 171],[14, 172],[15, 174],[16, 169],[17, 168],[18, 176],[19, 175],[20, 176],[21, 175],[22, 177],[23, 70],[24, 175],[25, 174],[26, 70],[27, 174]])

export const dark_pink_alt2_Checkbox = n481
export const dark_pink_alt2_RadioGroupItem = n481
export const dark_pink_alt2_Input = n481
export const dark_pink_alt2_TextArea = n481
const n482 = t([[12, 177],[13, 176],[14, 175],[15, 70],[16, 0],[17, 0],[18, 169],[19, 170],[20, 169],[21, 170],[22, 167],[23, 175],[24, 70],[25, 176],[26, 175],[27, 170]])

export const dark_pink_alt2_SwitchThumb = n482
const n483 = t([[12, 174],[13, 172],[14, 171],[15, 170],[16, 70],[17, 175],[18, 169],[19, 170],[20, 169],[21, 170],[22, 170],[23, 171],[24, 170],[25, 172],[26, 171],[27, 70]])

export const dark_pink_alt2_SliderTrackActive = n483
const n484 = t([[12, 175],[13, 70],[14, 174],[15, 172],[16, 176],[17, 177],[18, 169],[19, 170],[20, 169],[21, 170],[22, 168],[23, 174],[24, 172],[25, 70],[26, 174],[27, 172]])

export const dark_pink_alt2_SliderThumb = n484
export const dark_pink_alt2_Tooltip = n484
export const dark_pink_alt2_ProgressIndicator = n484
const n485 = t([[12, 171],[13, 172],[14, 174],[15, 70],[16, 170],[17, 169],[19, 70],[20, 175],[21, 70],[22, 176],[23, 174],[24, 70],[25, 172],[26, 174],[27, 172]])

export const dark_pink_active_ListItem = n485
const n486 = t([[12, 174],[13, 70],[14, 175],[15, 176],[16, 172],[17, 171],[19, 70],[20, 175],[21, 70],[22, 70],[23, 70],[24, 175],[25, 174],[26, 70],[27, 170]])

export const dark_pink_active_Button = n486
export const dark_pink_active_Switch = n486
const n487 = t([[12, 171],[13, 172],[14, 174],[15, 70],[16, 170],[17, 169],[19, 70],[20, 175],[21, 70],[22, 176],[23, 175],[24, 176],[25, 70],[26, 175],[27, 172]])

export const dark_pink_active_Checkbox = n487
export const dark_pink_active_Input = n487
export const dark_pink_active_TextArea = n487
const n488 = t([[12, 172],[13, 171],[14, 170],[15, 169],[16, 174],[17, 70],[19, 171],[20, 170],[21, 171],[22, 171],[23, 170],[24, 169],[25, 171],[26, 170],[27, 175]])

export const dark_pink_active_SliderTrackActive = n488
const n489 = t([[12, 191],[13, 192],[14, 193],[15, 194],[16, 190],[17, 189],[18, 199],[19, 198],[20, 199],[21, 198],[22, 0],[23, 194],[24, 196],[25, 193],[26, 194],[27, 94]])

export const dark_red_alt1_ListItem = n489
const n490 = t([[12, 192],[13, 193],[14, 194],[15, 196],[16, 191],[17, 190],[18, 199],[19, 198],[20, 199],[21, 198],[22, 199],[23, 196],[24, 94],[25, 194],[26, 196],[27, 196]])

export const dark_red_alt1_Card = n490
export const dark_red_alt1_DrawerFrame = n490
export const dark_red_alt1_Progress = n490
export const dark_red_alt1_TooltipArrow = n490
const n491 = t([[12, 193],[13, 194],[14, 196],[15, 94],[16, 192],[17, 191],[18, 199],[19, 198],[20, 199],[21, 198],[22, 198],[23, 196],[24, 94],[25, 194],[26, 196],[27, 194]])

export const dark_red_alt1_Button = n491
export const dark_red_alt1_Switch = n491
export const dark_red_alt1_TooltipContent = n491
export const dark_red_alt1_SliderTrack = n491
const n492 = t([[12, 191],[13, 192],[14, 193],[15, 194],[16, 190],[17, 189],[18, 199],[19, 198],[20, 199],[21, 198],[22, 0],[23, 94],[24, 197],[25, 196],[26, 94],[27, 94]])

export const dark_red_alt1_Checkbox = n492
export const dark_red_alt1_RadioGroupItem = n492
export const dark_red_alt1_Input = n492
export const dark_red_alt1_TextArea = n492
const n493 = t([[12, 0],[13, 199],[14, 198],[15, 197],[16, 0],[17, 0],[18, 190],[19, 191],[20, 190],[21, 191],[22, 189],[23, 197],[24, 94],[25, 198],[26, 197],[27, 191]])

export const dark_red_alt1_SwitchThumb = n493
const n494 = t([[12, 94],[13, 196],[14, 194],[15, 193],[16, 197],[17, 198],[18, 190],[19, 191],[20, 190],[21, 191],[22, 191],[23, 193],[24, 192],[25, 194],[26, 193],[27, 196]])

export const dark_red_alt1_SliderTrackActive = n494
const n495 = t([[12, 198],[13, 197],[14, 94],[15, 196],[16, 199],[17, 0],[18, 190],[19, 191],[20, 190],[21, 191],[22, 189],[23, 196],[24, 194],[25, 94],[26, 196],[27, 193]])

export const dark_red_alt1_SliderThumb = n495
export const dark_red_alt1_Tooltip = n495
export const dark_red_alt1_ProgressIndicator = n495
const n496 = t([[12, 192],[13, 193],[14, 194],[15, 196],[16, 191],[17, 190],[18, 198],[19, 197],[20, 198],[21, 197],[22, 199],[23, 194],[24, 196],[25, 193],[26, 194],[27, 196]])

export const dark_red_alt2_ListItem = n496
const n497 = t([[12, 193],[13, 194],[14, 196],[15, 94],[16, 192],[17, 191],[18, 198],[19, 197],[20, 198],[21, 197],[22, 198],[23, 196],[24, 94],[25, 194],[26, 196],[27, 194]])

export const dark_red_alt2_Card = n497
export const dark_red_alt2_DrawerFrame = n497
export const dark_red_alt2_Progress = n497
export const dark_red_alt2_TooltipArrow = n497
const n498 = t([[12, 194],[13, 196],[14, 94],[15, 197],[16, 193],[17, 192],[18, 198],[19, 197],[20, 198],[21, 197],[22, 197],[23, 196],[24, 94],[25, 194],[26, 196],[27, 193]])

export const dark_red_alt2_Button = n498
export const dark_red_alt2_Switch = n498
export const dark_red_alt2_TooltipContent = n498
export const dark_red_alt2_SliderTrack = n498
const n499 = t([[12, 192],[13, 193],[14, 194],[15, 196],[16, 191],[17, 190],[18, 198],[19, 197],[20, 198],[21, 197],[22, 199],[23, 94],[24, 197],[25, 196],[26, 94],[27, 196]])

export const dark_red_alt2_Checkbox = n499
export const dark_red_alt2_RadioGroupItem = n499
export const dark_red_alt2_Input = n499
export const dark_red_alt2_TextArea = n499
const n500 = t([[12, 199],[13, 198],[14, 197],[15, 94],[16, 0],[17, 0],[18, 191],[19, 192],[20, 191],[21, 192],[22, 189],[23, 197],[24, 94],[25, 198],[26, 197],[27, 192]])

export const dark_red_alt2_SwitchThumb = n500
const n501 = t([[12, 196],[13, 194],[14, 193],[15, 192],[16, 94],[17, 197],[18, 191],[19, 192],[20, 191],[21, 192],[22, 192],[23, 193],[24, 192],[25, 194],[26, 193],[27, 94]])

export const dark_red_alt2_SliderTrackActive = n501
const n502 = t([[12, 197],[13, 94],[14, 196],[15, 194],[16, 198],[17, 199],[18, 191],[19, 192],[20, 191],[21, 192],[22, 190],[23, 196],[24, 194],[25, 94],[26, 196],[27, 194]])

export const dark_red_alt2_SliderThumb = n502
export const dark_red_alt2_Tooltip = n502
export const dark_red_alt2_ProgressIndicator = n502
const n503 = t([[12, 193],[13, 194],[14, 196],[15, 94],[16, 192],[17, 191],[19, 94],[20, 197],[21, 94],[22, 198],[23, 196],[24, 94],[25, 194],[26, 196],[27, 194]])

export const dark_red_active_ListItem = n503
const n504 = t([[12, 196],[13, 94],[14, 197],[15, 198],[16, 194],[17, 193],[19, 94],[20, 197],[21, 94],[22, 94],[23, 94],[24, 197],[25, 196],[26, 94],[27, 192]])

export const dark_red_active_Button = n504
export const dark_red_active_Switch = n504
const n505 = t([[12, 193],[13, 194],[14, 196],[15, 94],[16, 192],[17, 191],[19, 94],[20, 197],[21, 94],[22, 198],[23, 197],[24, 198],[25, 94],[26, 197],[27, 194]])

export const dark_red_active_Checkbox = n505
export const dark_red_active_Input = n505
export const dark_red_active_TextArea = n505
const n506 = t([[12, 194],[13, 193],[14, 192],[15, 191],[16, 196],[17, 94],[19, 193],[20, 192],[21, 193],[22, 193],[23, 192],[24, 191],[25, 193],[26, 192],[27, 197]])

export const dark_red_active_SliderTrackActive = n506
const n507 = t([[12, 136],[13, 137],[14, 137],[15, 138],[16, 135],[17, 134],[18, 144],[19, 143],[20, 144],[21, 143],[22, 0],[23, 138],[24, 140],[25, 137],[26, 138],[27, 141]])

export const dark_gray_alt1_ListItem = n507
const n508 = t([[12, 137],[13, 137],[14, 138],[15, 140],[16, 136],[17, 135],[18, 144],[19, 143],[20, 144],[21, 143],[22, 144],[23, 140],[24, 141],[25, 138],[26, 140],[27, 140]])

export const dark_gray_alt1_Card = n508
export const dark_gray_alt1_DrawerFrame = n508
export const dark_gray_alt1_Progress = n508
export const dark_gray_alt1_TooltipArrow = n508
const n509 = t([[12, 137],[13, 138],[14, 140],[15, 141],[16, 137],[17, 136],[18, 144],[19, 143],[20, 144],[21, 143],[22, 143],[23, 140],[24, 141],[25, 138],[26, 140],[27, 138]])

export const dark_gray_alt1_Button = n509
export const dark_gray_alt1_Switch = n509
export const dark_gray_alt1_TooltipContent = n509
export const dark_gray_alt1_SliderTrack = n509
const n510 = t([[12, 136],[13, 137],[14, 137],[15, 138],[16, 135],[17, 134],[18, 144],[19, 143],[20, 144],[21, 143],[22, 0],[23, 141],[24, 142],[25, 140],[26, 141],[27, 141]])

export const dark_gray_alt1_Checkbox = n510
export const dark_gray_alt1_RadioGroupItem = n510
export const dark_gray_alt1_Input = n510
export const dark_gray_alt1_TextArea = n510
const n511 = t([[12, 0],[13, 144],[14, 143],[15, 142],[16, 0],[17, 0],[18, 135],[19, 136],[20, 135],[21, 136],[22, 134],[23, 142],[24, 141],[25, 143],[26, 142],[27, 136]])

export const dark_gray_alt1_SwitchThumb = n511
const n512 = t([[12, 141],[13, 140],[14, 138],[15, 137],[16, 142],[17, 143],[18, 135],[19, 136],[20, 135],[21, 136],[22, 136],[23, 137],[24, 137],[25, 138],[26, 137],[27, 140]])

export const dark_gray_alt1_SliderTrackActive = n512
const n513 = t([[12, 143],[13, 142],[14, 141],[15, 140],[16, 144],[17, 0],[18, 135],[19, 136],[20, 135],[21, 136],[22, 134],[23, 140],[24, 138],[25, 141],[26, 140],[27, 137]])

export const dark_gray_alt1_SliderThumb = n513
export const dark_gray_alt1_Tooltip = n513
export const dark_gray_alt1_ProgressIndicator = n513
const n514 = t([[12, 137],[13, 137],[14, 138],[15, 140],[16, 136],[17, 135],[18, 143],[19, 142],[20, 143],[21, 142],[22, 144],[23, 138],[24, 140],[25, 137],[26, 138],[27, 140]])

export const dark_gray_alt2_ListItem = n514
const n515 = t([[12, 137],[13, 138],[14, 140],[15, 141],[16, 137],[17, 136],[18, 143],[19, 142],[20, 143],[21, 142],[22, 143],[23, 140],[24, 141],[25, 138],[26, 140],[27, 138]])

export const dark_gray_alt2_Card = n515
export const dark_gray_alt2_DrawerFrame = n515
export const dark_gray_alt2_Progress = n515
export const dark_gray_alt2_TooltipArrow = n515
const n516 = t([[12, 138],[13, 140],[14, 141],[15, 142],[16, 137],[17, 137],[18, 143],[19, 142],[20, 143],[21, 142],[22, 142],[23, 140],[24, 141],[25, 138],[26, 140],[27, 137]])

export const dark_gray_alt2_Button = n516
export const dark_gray_alt2_Switch = n516
export const dark_gray_alt2_TooltipContent = n516
export const dark_gray_alt2_SliderTrack = n516
const n517 = t([[12, 137],[13, 137],[14, 138],[15, 140],[16, 136],[17, 135],[18, 143],[19, 142],[20, 143],[21, 142],[22, 144],[23, 141],[24, 142],[25, 140],[26, 141],[27, 140]])

export const dark_gray_alt2_Checkbox = n517
export const dark_gray_alt2_RadioGroupItem = n517
export const dark_gray_alt2_Input = n517
export const dark_gray_alt2_TextArea = n517
const n518 = t([[12, 144],[13, 143],[14, 142],[15, 141],[16, 0],[17, 0],[18, 136],[19, 137],[20, 136],[21, 137],[22, 134],[23, 142],[24, 141],[25, 143],[26, 142],[27, 137]])

export const dark_gray_alt2_SwitchThumb = n518
const n519 = t([[12, 140],[13, 138],[14, 137],[15, 137],[16, 141],[17, 142],[18, 136],[19, 137],[20, 136],[21, 137],[22, 137],[23, 137],[24, 137],[25, 138],[26, 137],[27, 141]])

export const dark_gray_alt2_SliderTrackActive = n519
const n520 = t([[12, 142],[13, 141],[14, 140],[15, 138],[16, 143],[17, 144],[18, 136],[19, 137],[20, 136],[21, 137],[22, 135],[23, 140],[24, 138],[25, 141],[26, 140],[27, 138]])

export const dark_gray_alt2_SliderThumb = n520
export const dark_gray_alt2_Tooltip = n520
export const dark_gray_alt2_ProgressIndicator = n520
const n521 = t([[12, 137],[13, 138],[14, 140],[15, 141],[16, 137],[17, 136],[19, 141],[20, 142],[21, 141],[22, 143],[23, 140],[24, 141],[25, 138],[26, 140],[27, 138]])

export const dark_gray_active_ListItem = n521
const n522 = t([[12, 140],[13, 141],[14, 142],[15, 143],[16, 138],[17, 137],[19, 141],[20, 142],[21, 141],[22, 141],[23, 141],[24, 142],[25, 140],[26, 141],[27, 137]])

export const dark_gray_active_Button = n522
export const dark_gray_active_Switch = n522
const n523 = t([[12, 137],[13, 138],[14, 140],[15, 141],[16, 137],[17, 136],[19, 141],[20, 142],[21, 141],[22, 143],[23, 142],[24, 143],[25, 141],[26, 142],[27, 138]])

export const dark_gray_active_Checkbox = n523
export const dark_gray_active_Input = n523
export const dark_gray_active_TextArea = n523
const n524 = t([[12, 138],[13, 137],[14, 137],[15, 136],[16, 140],[17, 141],[19, 137],[20, 137],[21, 137],[22, 137],[23, 137],[24, 136],[25, 137],[26, 137],[27, 142]])

export const dark_gray_active_SliderTrackActive = n524