import { IconButton } from "@/components/button/IconButton";
import Icons from "@/components/icons";
import ConfirmModal from "@/components/modal";
import { Col, Row, Table, Text, Tooltip } from "@nextui-org/react";
import React, { useState } from "react";

type UserType = {
  id: string | number;
  name?: string;
  email?: string;
  phone_no?: string;
  team?: string;
  Address: string;
  age?: number;
  avatar?: string;
  submitted?: string;
  gender?: string;
  city?: string;
  state?: string | null;
  country?: string;
  native_language?: string;
  marital_status?: boolean;
  [key: string]: any;
};

export default function AnalyticsPage() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const columns = [
    { name: "Id", uid: "id" },
    { name: "Name", uid: "name" },
    { name: "Email", uid: "email" },
    { name: "Phone", uid: "phone_no" },
    { name: "Team", uid: "team" },
    { name: "Address", uid: "Address" },
    // { name: "Age", uid: "age" },
    // { name: "Gender", uid: "gender" },
    // { name: "City", uid: "city" },
    // { name: "State", uid: "state" },
    // { name: "Country", uid: "country" },
    // { name: "Language", uid: "native_language" },
    { name: "Submit Date", uid: "submitted" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const users: UserType[] = [
    {
      id: 1,
      name: "Ewan",
      phone_no: "554-225-8150",
      email: "erallin0@geocities.jp",
      Address: "39 Lakewood Trail",
      team: "Health Coach IV",
      age: 82,
      submitted: "2/7/2023",
      avatar:
        "https://robohash.org/autreprehenderitvoluptatem.png?size=50x50&set=set1",
      gender: "Non-binary",
      city: "Zhongtai",
      state: null,
      country: "China",
      native_language: "Kurdish",
      marital_status: true,
    },
    {
      id: 2,
      name: "Arlinda",
      phone_no: "459-494-9469",
      email: "atedder1@washington.edu",
      Address: "77682 Independence Place",
      team: "Quality Engineer",
      age: 83,
      submitted: "9/28/2022",
      avatar: "https://robohash.org/aliasipsaaut.png?size=50x50&set=set1",
      gender: "Female",
      city: "Łaskarzew",
      state: null,
      country: "Poland",
      native_language: "Kyrgyz",
      marital_status: false,
    },
    {
      id: 3,
      name: "Shelden",
      phone_no: "293-875-0426",
      email: "syoxall2@europa.eu",
      Address: "59166 Northridge Hill",
      team: "Junior Executive",
      age: 63,
      submitted: "1/20/2023",
      avatar:
        "https://robohash.org/necessitatibusvoluptatumaliquam.png?size=50x50&set=set1",
      gender: "Male",
      city: "Tandag",
      state: null,
      country: "Philippines",
      native_language: "Khmer",
      marital_status: false,
    },
    {
      id: 4,
      name: "Honor",
      phone_no: "535-987-7166",
      email: "hbaines3@time.com",
      Address: "0840 American Ash Junction",
      team: "Information Systems Manager",
      age: 28,
      submitted: "2/2/2023",
      avatar: "https://robohash.org/easednam.png?size=50x50&set=set1",
      gender: "Female",
      city: "Saint-Pierre",
      state: "Réunion",
      country: "Reunion",
      native_language: "West Frisian",
      marital_status: true,
    },
    {
      id: 5,
      name: "Harlin",
      phone_no: "831-662-6450",
      email: "htidbury4@spiegel.de",
      Address: "83646 Old Shore Park",
      team: "Project Manager",
      age: 23,
      submitted: "9/1/2022",
      avatar:
        "https://robohash.org/nobisarchitectomaxime.png?size=50x50&set=set1",
      gender: "Genderqueer",
      city: "Oral",
      state: null,
      country: "Kazakhstan",
      native_language: "Macedonian",
      marital_status: false,
    },
    {
      id: 6,
      name: "Priscella",
      phone_no: "281-844-3374",
      email: "ptowse5@last.fm",
      Address: "0 Gina Center",
      team: "Programmer Analyst II",
      age: 65,
      submitted: "11/28/2022",
      avatar: "https://robohash.org/ipsaipsamipsum.png?size=50x50&set=set1",
      gender: "Female",
      city: "Tengqiao",
      state: null,
      country: "China",
      native_language: "Italian",
      marital_status: false,
    },
    {
      id: 7,
      name: "Laurie",
      phone_no: "888-719-1692",
      email: "lceschelli6@constantcontact.com",
      Address: "45054 Rusk Road",
      team: "Safety Technician II",
      age: 87,
      submitted: "11/23/2022",
      avatar: "https://robohash.org/quiseddolorem.png?size=50x50&set=set1",
      gender: "Male",
      city: "Kasempa",
      state: null,
      country: "Zambia",
      native_language: "Kyrgyz",
      marital_status: true,
    },
    {
      id: 8,
      name: "Natalina",
      phone_no: "910-520-6229",
      email: "ndearden7@sbwire.com",
      Address: "62977 Warner Way",
      team: "Quality Engineer",
      age: 79,
      submitted: "4/29/2022",
      avatar: "https://robohash.org/sitrerumdoloribus.png?size=50x50&set=set1",
      gender: "Female",
      city: "Stepnogorsk",
      state: null,
      country: "Kazakhstan",
      native_language: "German",
      marital_status: true,
    },
    {
      id: 9,
      name: "Ingar",
      phone_no: "278-823-1445",
      email: "ilindenblatt8@businessinsider.com",
      Address: "214 Grim Trail",
      team: "Nuclear Power Engineer",
      age: 93,
      submitted: "5/11/2022",
      avatar:
        "https://robohash.org/teneturcommodiratione.png?size=50x50&set=set1",
      gender: "Male",
      city: "Zaragoza",
      state: null,
      country: "Philippines",
      native_language: "Tamil",
      marital_status: true,
    },
    {
      id: 10,
      name: "Avigdor",
      phone_no: "115-565-3229",
      email: "ahannam9@si.edu",
      Address: "829 Meadow Ridge Drive",
      team: "Senior Financial Analyst",
      age: 35,
      submitted: "12/6/2022",
      avatar:
        "https://robohash.org/fugitconsecteturquia.png?size=50x50&set=set1",
      gender: "Male",
      city: "Brejoeira",
      state: "Setúbal",
      country: "Portugal",
      native_language: "Gujarati",
      marital_status: true,
    },
    {
      id: 11,
      name: "Doro",
      phone_no: "841-939-8002",
      email: "dboxa@blogger.com",
      Address: "5 Eastlawn Center",
      team: "Legal Assistant",
      age: 60,
      submitted: "8/13/2022",
      avatar: "https://robohash.org/quiaautducimus.png?size=50x50&set=set1",
      gender: "Female",
      city: "Gornorechenskiy",
      state: null,
      country: "Russia",
      native_language: "Quechua",
      marital_status: false,
    },
    {
      id: 12,
      name: "Kit",
      phone_no: "751-530-8887",
      email: "kshorteb@cnbc.com",
      Address: "00 Anniversary Lane",
      team: "Senior Editor",
      age: 93,
      submitted: "10/1/2022",
      avatar: "https://robohash.org/autemquiest.png?size=50x50&set=set1",
      gender: "Female",
      city: "Budenovetc",
      state: null,
      country: "Russia",
      native_language: "Lao",
      marital_status: true,
    },
    {
      id: 13,
      name: "Sammie",
      phone_no: "451-483-6183",
      email: "sblakerc@state.tx.us",
      Address: "8496 Eggendart Center",
      team: "Accountant I",
      age: 77,
      submitted: "5/20/2022",
      avatar:
        "https://robohash.org/quasiaccusantiumvoluptatibus.png?size=50x50&set=set1",
      gender: "Male",
      city: "Karlivka",
      state: null,
      country: "Ukraine",
      native_language: "Persian",
      marital_status: false,
    },
    {
      id: 14,
      name: "Joli",
      phone_no: "973-142-1481",
      email: "jillsleyd@weebly.com",
      Address: "5694 Pearson Way",
      team: "Editor",
      age: 73,
      submitted: "2/11/2023",
      avatar: "https://robohash.org/rerumnonillum.png?size=50x50&set=set1",
      gender: "Female",
      city: "Vokhaïkó",
      state: null,
      country: "Greece",
      native_language: "Tok Pisin",
      marital_status: false,
    },
    {
      id: 15,
      name: "Lion",
      phone_no: "897-265-6441",
      email: "liveanse@fotki.com",
      Address: "6 Elgar Hill",
      team: "Senior Quality Engineer",
      age: 39,
      submitted: "5/25/2022",
      avatar: "https://robohash.org/itaquequaeratin.png?size=50x50&set=set1",
      gender: "Male",
      city: "Dasht-e Lati",
      state: null,
      country: "Iran",
      native_language: "Northern Sotho",
      marital_status: true,
    },
    {
      id: 16,
      name: "Sallie",
      phone_no: "508-385-7474",
      email: "sroswarnf@constantcontact.com",
      Address: "36 Darwin Place",
      team: "Associate Professor",
      age: 56,
      submitted: "4/29/2022",
      avatar: "https://robohash.org/totamearumad.png?size=50x50&set=set1",
      gender: "Female",
      city: "Buliwao",
      state: null,
      country: "Philippines",
      native_language: "Haitian Creole",
      marital_status: true,
    },
    {
      id: 17,
      name: "Estella",
      phone_no: "823-338-3262",
      email: "egreevesg@boston.com",
      Address: "9805 Anhalt Parkway",
      team: "Web Designer IV",
      age: 31,
      submitted: "3/9/2023",
      avatar:
        "https://robohash.org/asperioresnecessitatibusin.png?size=50x50&set=set1",
      gender: "Non-binary",
      city: "Casais Brancos",
      state: "Leiria",
      country: "Portugal",
      native_language: "Bengali",
      marital_status: true,
    },
    {
      id: 18,
      name: "Gallagher",
      phone_no: "622-759-5189",
      email: "goultramh@linkedin.com",
      Address: "152 Raven Pass",
      team: "Account Executive",
      age: 68,
      submitted: "4/4/2022",
      avatar: "https://robohash.org/doloresadsit.png?size=50x50&set=set1",
      gender: "Male",
      city: "Parang",
      state: null,
      country: "Philippines",
      native_language: "Indonesian",
      marital_status: true,
    },
    {
      id: 19,
      name: "Clarine",
      phone_no: "708-818-1698",
      email: "clivzeyi@creativecommons.org",
      Address: "7087 American Alley",
      team: "Budget/Accounting Analyst IV",
      age: 18,
      submitted: "5/22/2022",
      avatar:
        "https://robohash.org/doloretnecessitatibus.png?size=50x50&set=set1",
      gender: "Bigender",
      city: "Zhanghekou",
      state: null,
      country: "China",
      native_language: "Moldovan",
      marital_status: false,
    },
    {
      id: 20,
      name: "Rockey",
      phone_no: "112-720-0003",
      email: "rmarfej@t-online.de",
      Address: "4183 Gale Plaza",
      team: "Accountant IV",
      age: 76,
      submitted: "9/25/2022",
      avatar: "https://robohash.org/omnisenimaut.png?size=50x50&set=set1",
      gender: "Male",
      city: "Uyugan",
      state: null,
      country: "Philippines",
      native_language: "Georgian",
      marital_status: false,
    },
    {
      id: 21,
      name: "Sabra",
      phone_no: "539-617-4777",
      email: "sosburnk@linkedin.com",
      Address: "885 Londonderry Center",
      team: "Engineer IV",
      age: 24,
      submitted: "3/26/2022",
      avatar: "https://robohash.org/ipsanihilet.png?size=50x50&set=set1",
      gender: "Female",
      city: "Guanghou",
      state: null,
      country: "China",
      native_language: "Thai",
      marital_status: true,
    },
    {
      id: 22,
      name: "Lenna",
      phone_no: "210-291-9336",
      email: "lmanssuerl@prweb.com",
      Address: "365 4th Circle",
      team: "Programmer Analyst II",
      age: 32,
      submitted: "2/7/2023",
      avatar:
        "https://robohash.org/maximepossimusexercitationem.png?size=50x50&set=set1",
      gender: "Genderfluid",
      city: "Jalālpur Pīrwāla",
      state: null,
      country: "Pakistan",
      native_language: "Korean",
      marital_status: true,
    },
    {
      id: 23,
      name: "Estella",
      phone_no: "396-178-1070",
      email: "emarchellim@imdb.com",
      Address: "5368 American Place",
      team: "Cost Accountant",
      age: 31,
      submitted: "10/31/2022",
      avatar:
        "https://robohash.org/suscipitsedcupiditate.png?size=50x50&set=set1",
      gender: "Female",
      city: "Songgang-dong",
      state: null,
      country: "South Korea",
      native_language: "Dari",
      marital_status: true,
    },
    {
      id: 24,
      name: "Nananne",
      phone_no: "994-753-0722",
      email: "nritmeyern@blog.com",
      Address: "5239 Randy Alley",
      team: "Associate Professor",
      age: 55,
      submitted: "1/2/2023",
      avatar: "https://robohash.org/sitquibusdamvel.png?size=50x50&set=set1",
      gender: "Female",
      city: "Karagay",
      state: null,
      country: "Russia",
      native_language: "Macedonian",
      marital_status: true,
    },
    {
      id: 25,
      name: "Mandel",
      phone_no: "451-548-1933",
      email: "mfriedo@gnu.org",
      Address: "5844 Clove Trail",
      team: "Product Engineer",
      age: 42,
      submitted: "7/20/2022",
      avatar:
        "https://robohash.org/recusandaedolorquia.png?size=50x50&set=set1",
      gender: "Male",
      city: "Bissen",
      state: null,
      country: "Luxembourg",
      native_language: "Quechua",
      marital_status: true,
    },
    {
      id: 26,
      name: "Clarisse",
      phone_no: "540-899-2181",
      email: "cbunningp@hubpages.com",
      Address: "2177 Del Mar Court",
      team: "Assistant Professor",
      age: 63,
      submitted: "5/31/2022",
      avatar: "https://robohash.org/enimquamvoluptate.png?size=50x50&set=set1",
      gender: "Female",
      city: "Chapimarca",
      state: null,
      country: "Peru",
      native_language: "Icelandic",
      marital_status: true,
    },
    {
      id: 27,
      name: "Hestia",
      phone_no: "928-750-7184",
      email: "hcrowdq@google.com",
      Address: "57460 Vahlen Plaza",
      team: "Senior Editor",
      age: 31,
      submitted: "3/6/2023",
      avatar: "https://robohash.org/utnemomodi.png?size=50x50&set=set1",
      gender: "Female",
      city: "Yanghuxiang",
      state: null,
      country: "China",
      native_language: "Nepali",
      marital_status: false,
    },
    {
      id: 28,
      name: "Arabela",
      phone_no: "232-376-0801",
      email: "afranssenir@dion.ne.jp",
      Address: "25 Troy Street",
      team: "Administrative Officer",
      age: 30,
      submitted: "3/13/2023",
      avatar:
        "https://robohash.org/possimuslaboriosamquo.png?size=50x50&set=set1",
      gender: "Female",
      city: "Jinrongjie",
      state: null,
      country: "China",
      native_language: "Romanian",
      marital_status: true,
    },
    {
      id: 29,
      name: "Filip",
      phone_no: "134-680-8294",
      email: "fcants@xrea.com",
      Address: "25345 Summerview Avenue",
      team: "Information Systems Manager",
      age: 42,
      submitted: "1/13/2023",
      avatar: "https://robohash.org/sedestiure.png?size=50x50&set=set1",
      gender: "Agender",
      city: "Rovnoye",
      state: null,
      country: "Russia",
      native_language: "Croatian",
      marital_status: true,
    },
    {
      id: 30,
      name: "Sarita",
      phone_no: "756-807-1109",
      email: "sdrezzert@who.int",
      Address: "6358 Montana Center",
      team: "Pharmacist",
      age: 37,
      submitted: "3/23/2023",
      avatar:
        "https://robohash.org/maioresvoluptatemeligendi.png?size=50x50&set=set1",
      gender: "Female",
      city: "Kotel",
      state: null,
      country: "Bulgaria",
      native_language: "Kurdish",
      marital_status: false,
    },
    {
      id: 31,
      name: "Dacy",
      phone_no: "643-585-9714",
      email: "dpetryu@merriam-webster.com",
      Address: "005 Birchwood Point",
      team: "Mechanical Systems Engineer",
      age: 68,
      submitted: "5/2/2022",
      avatar: "https://robohash.org/eiusliberodebitis.png?size=50x50&set=set1",
      gender: "Non-binary",
      city: "Asarum",
      state: "Blekinge",
      country: "Sweden",
      native_language: "Tswana",
      marital_status: true,
    },
    {
      id: 32,
      name: "Amby",
      phone_no: "911-151-3975",
      email: "atybaltv@mozilla.org",
      Address: "7386 Fordem Circle",
      team: "Internal Auditor",
      age: 51,
      submitted: "11/29/2022",
      avatar:
        "https://robohash.org/explicabopraesentiumut.png?size=50x50&set=set1",
      gender: "Male",
      city: "Togu",
      state: null,
      country: "Indonesia",
      native_language: "Dhivehi",
      marital_status: false,
    },
    {
      id: 33,
      name: "Aldis",
      phone_no: "834-682-4581",
      email: "apawelskiw@whitehouse.gov",
      Address: "6 Bonner Trail",
      team: "Environmental Tech",
      age: 98,
      submitted: "3/21/2023",
      avatar: "https://robohash.org/eanostrumneque.png?size=50x50&set=set1",
      gender: "Male",
      city: "Mir",
      state: null,
      country: "Belarus",
      native_language: "Quechua",
      marital_status: false,
    },
    {
      id: 34,
      name: "Selie",
      phone_no: "836-605-5918",
      email: "sregglerx@uol.com.br",
      Address: "0 Loomis Avenue",
      team: "Senior Quality Engineer",
      age: 9,
      submitted: "10/29/2022",
      avatar:
        "https://robohash.org/providentvoluptatibusquia.png?size=50x50&set=set1",
      gender: "Female",
      city: "Inđija",
      state: null,
      country: "Serbia",
      native_language: "Māori",
      marital_status: true,
    },
    {
      id: 35,
      name: "Emilee",
      phone_no: "343-325-2490",
      email: "eilotty@bizjournals.com",
      Address: "4 Lerdahl Alley",
      team: "Graphic Designer",
      age: 73,
      submitted: "3/17/2023",
      avatar: "https://robohash.org/autaliquamet.png?size=50x50&set=set1",
      gender: "Bigender",
      city: "Yingwusitang",
      state: null,
      country: "China",
      native_language: "Kannada",
      marital_status: false,
    },
    {
      id: 36,
      name: "Jard",
      phone_no: "181-503-6919",
      email: "jmedlandz@flavors.me",
      Address: "35060 Dottie Hill",
      team: "Legal Assistant",
      age: 62,
      submitted: "3/2/2023",
      avatar: "https://robohash.org/etmodinon.png?size=50x50&set=set1",
      gender: "Male",
      city: "Xinlin",
      state: null,
      country: "China",
      native_language: "Filipino",
      marital_status: true,
    },
    {
      id: 37,
      name: "Jacinda",
      phone_no: "918-885-9522",
      email: "jmatfin10@ibm.com",
      Address: "69955 Mallory Pass",
      team: "Accounting Assistant II",
      age: 89,
      submitted: "11/28/2022",
      avatar: "https://robohash.org/voluptatemestvelit.png?size=50x50&set=set1",
      gender: "Female",
      city: "Bella Vista",
      state: null,
      country: "Argentina",
      native_language: "Luxembourgish",
      marital_status: true,
    },
    {
      id: 38,
      name: "Janene",
      phone_no: "855-459-0966",
      email: "jcossans11@hibu.com",
      Address: "076 Golf View Road",
      team: "Professor",
      age: 37,
      submitted: "4/10/2022",
      avatar: "https://robohash.org/sitquolabore.png?size=50x50&set=set1",
      gender: "Female",
      city: "Uptar",
      state: null,
      country: "Russia",
      native_language: "Quechua",
      marital_status: true,
    },
    {
      id: 39,
      name: "Cate",
      phone_no: "159-228-7396",
      email: "cgrundy12@forbes.com",
      Address: "382 Summer Ridge Crossing",
      team: "Budget/Accounting Analyst IV",
      age: 63,
      submitted: "5/31/2022",
      avatar:
        "https://robohash.org/esttemporaconsectetur.png?size=50x50&set=set1",
      gender: "Female",
      city: "Rajapeni",
      state: null,
      country: "Indonesia",
      native_language: "Croatian",
      marital_status: true,
    },
    {
      id: 40,
      name: "Teodorico",
      phone_no: "405-272-9392",
      email: "tmitham13@vimeo.com",
      Address: "6454 Chinook Way",
      team: "Health Coach I",
      age: 96,
      submitted: "2/12/2023",
      avatar:
        "https://robohash.org/blanditiisperferendisomnis.png?size=50x50&set=set1",
      gender: "Male",
      city: "Dongsheng",
      state: null,
      country: "China",
      native_language: "Aymara",
      marital_status: true,
    },
  ];

  const renderCell = (user: UserType, columnKey: React.Key) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <div className="w-15">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );
      case "email":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );
      case "phone_no":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );
      case "Address":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "team":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "age":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "gender":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "city":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "state":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "country":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "native_language":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "marital_status":
        return (
          <div className="w-20">
            <Text size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </div>
        );

      case "submitted":
        return (
          <Col>
            <Row>
              <Text size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete Data" color="warning">
                <IconButton onClick={handler}>
                  <Icons iconName="delete" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="p-5 h-screen w-full" style={{ overflow: "auto" }}>
      <ConfirmModal
        visible={visible}
        closeHandler={closeHandler}
        headerText="Delete Data"
        bodyText="This step is irreversible, are you sure to delete the data?"
        confirmText="Delete"
        cancelText="Cancel"
      />
      <Table
        hoverable
        lined
        headerLined
        shadow={false}
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
              css={{
                backgroundColor: "#F9FFFF",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item: UserType) => (
            <Table.Row
              css={{
                "&:hover": {
                  backgroundColor: "white",
                  shadow: "0 0 0 1px #F7F7F7",
                },
              }}
            >
              {(columnKey: React.Key) => (
                <Table.Cell
                  css={{
                    paddingBottom: "12px",
                    paddingTop: "12px",
                  }}
                >
                  {renderCell(item, columnKey)}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={10}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </div>
  );
}
