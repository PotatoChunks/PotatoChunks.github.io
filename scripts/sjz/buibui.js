const _builds = [
    {
        gunType: "M16A4突击步枪",
        title: "两轮连射同级弹必死，一轮连射越级秒头",
        code: "6w-M16A4突击步枪-烽火地带-6GBE2K00B12QASUQB4J4K"
    },
    {
        gunType: "MP5冲锋枪",
        title: "这个价位腰射流的唯一顶点",
        code: "11w-MP5冲锋枪-烽火地带-6GBE1B00B12QASUQB4J4K"
    },
    {
        gunType: "SMG-45冲锋枪",
        title: "实为伪装冲锋枪的步枪",
        code: "8w-SMG-45冲锋枪-烽火地带-6GBE2000B12QASUQB4J4K"
    },
    {
        gunType: "QBZ95-1突击步枪",
        title: "中距离选择还是够伟大的",
        code: "11w-QBZ95-1突击步枪-烽火地带-6GBE5B80B12QASUQB4J4K"
    },
    {
        gunType: "R93狙击步枪",
        title: "带几颗金弹,嘎嘎或乱杀",
        code: "10w-R93狙击步枪-烽火地带-6GBE4SK0B12QASUQB4J4K"
    },
    {
        gunType: "SR9射手步枪",
        title: "有金蛋三枪死，十万买不了吃亏买不了上当",
        code: "10w-SR9射手步枪-烽火地带-6GBE4OO0B12QASUQB4J4K"
    },
    {
        gunType: "M249轻机枪",
        title: "点死左键就完事了",
        code: "13w-M249轻机枪-烽火地带-6GBE4BC0B12QASUQB4J4K"
    },
    {
        gunType: "SG552突击步枪",
        title: "sg552真的是这个价位开镜近战之王",
        code: "10w-SG552突击步枪-烽火地带-6G293240B12QASUQB4J4K"
    },
    {
        gunType: "725双管霰弹枪",
        title: "能做到吗,双管喷大人!",
        code: "10w-725双管霰弹枪-烽火地带-6GBE47K0B12QASUQB4J4K"
    },
    {
        gunType: "AUG突击步枪",
        title: "18W(±2W)低改性价比高",
        code: "18W-AUG突击步枪-烽火地带-6GAKLN00B12QASUQB4J4K"
    },
    {
        gunType: "AKM突击步枪",
        title: "ak伟大，无需多言",
        code: "16W-AKM突击步枪-烽火地带-6GAKK2O0B12QASUQB4J4K"
    },
    {
        gunType: "M4A1突击步枪",
        title: "本游最均衡步枪的均衡步枪",
        code: "17W-M4A1突击步枪-烽火地带-6GAKLI40B12QASUQB4J4K"
    },
    {
        gunType: "MP7冲锋枪",
        title: "版本最强冲锋枪",
        code: "21W-MP7冲锋枪-烽火地带-6G9FITG0B12QASUQB4J4K"
    },
    {
        gunType: "G3战斗步枪",
        title: "比死噶强在这个价能上三倍镜",
        code: "16W-G3战斗步枪-烽火地带-6GAKNCC0B12QASUQB4J4K"
    },
    {
        gunType: "QBZ95-1突击步枪",
        title: "最便宜的几种金弹之一",
        code: "15W-QBZ95-1突击步枪-烽火地带-6GAKMF40B12QASUQB4J4K"
    },
    {
        gunType: "SR-3M紧凑突击步枪",
        title: "不腰射那玩这把枪就对了",
        code: "16W-SR-3M紧凑突击步枪-烽火地带-6GAKR7G0B12QASUQB4J4K"
    },
    {
        gunType: "M249轻机枪",
        title: "还行的机枪,可能价格变高了",
        code: "20W-M249轻机枪-烽火地带-6GAKOSO0B12QASUQB4J4K"
    },
    {
        gunType: "SCAR-H战斗步枪",
        title: "能两枪头，打肉快，甜品区是满甲对决",
        code: "18W-SCAR-H战斗步枪-烽火地带-6GAKQNC0B12QASUQB4J4K"
    },
];

for (let i = 0; i < _builds.length; i++) {
    _builds[i].id = i + 1;
}
_builds.sort((a,b) => b.id-a.id);