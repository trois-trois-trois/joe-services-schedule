const scheduledb = require('./index.js')

const ramsSchedule =
[
  {
  "id": 1,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 1,
  "date": "28-Oct-2018",
  "opponent": "Arizona Cardinals",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 34-0",
  "winloss": "3-0",
  "stats": {
    "pass": 270,
    "rush": 141,
    "rec": 111
  },
  "players": "Cort Buckam",
  "feed": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
}, {
  "id": 2,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 2,
  "date": "08-Dec-2018",
  "opponent": "Atlanta Falcons",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 23-20",
  "winloss": "5-0",
  "stats": {
    "pass": 325,
    "rush": 128,
    "rec": 119
  },
  "players": "Lorena Lyddon",
  "feed": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "id": 3,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 3,
  "date": "16-Sep-2018",
  "opponent": "Denver Broncos",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "L 30-23",
  "winloss": "11-3",
  "stats": {
    "pass": 219,
    "rush": 207,
    "rec": 98
  },
  "players": "Jarrad Brushfield",
  "feed": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
}, {
  "id": 4,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 4,
  "date": "11-Sep-2018",
  "opponent": "Green Bay Packers",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 14-0",
  "winloss": "8-1",
  "stats": {
    "pass": 287,
    "rush": 62,
    "rec": 172
  },
  "players": "Kele Uridge",
  "feed": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "id": 5,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 5,
  "date": "10-Nov-2018",
  "opponent": "Kansas City Chiefs",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 39-10",
  "winloss": "11-2",
  "stats": {
    "pass": 366,
    "rush": 64,
    "rec": 140
  },
  "players": "Frieda Pinnion",
  "feed": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
  "id": 6,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 6,
  "date": "09-Nov-2018",
  "opponent": "San Francisco 49ers",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 35-23",
  "winloss": "8-0",
  "stats": {
    "pass": 425,
    "rush": 129,
    "rec": 201
  },
  "players": "Druci Bentame",
  "feed": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "id": 7,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 7,
  "date": "18-Nov-2018",
  "opponent": "Washington Redskins",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "L 30-23",
  "winloss": "13-3",
  "stats": {
    "pass": 360,
    "rush": 66,
    "rec": 125
  },
  "players": "Ashia Camilleri",
  "feed": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
}, {
  "id": 8,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 8,
  "date": "12-Dec-2018",
  "opponent": "Jacksonville Jaguars",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 38-31",
  "winloss": "8-0",
  "stats": {
    "pass": 192,
    "rush": 68,
    "rec": 95
  },
  "players": "Celine Garrity",
  "feed": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
}, {
  "id": 9,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 9,
  "date": "13-Nov-2018",
  "opponent": "Kansas City Chiefs",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "L 45-35",
  "winloss": "10-1",
  "stats": {
    "pass": 274,
    "rush": 119,
    "rec": 224
  },
  "players": "Daphne Greenhouse",
  "feed": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
  "id": 10,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 10,
  "date": "10-Sep-2018",
  "opponent": "Washington Redskins",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 23-20",
  "winloss": "BYE WEEK",
  "stats": {
    "pass": 423,
    "rush": 118,
    "rec": 116
  },
  "players": "Alvin Peck",
  "feed": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
}, {
  "id": 11,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 11,
  "date": "16-Nov-2018",
  "opponent": "San Francisco 49ers",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 54-51",
  "winloss": "13-3",
  "stats": {
    "pass": 184,
    "rush": 172,
    "rec": 110
  },
  "players": "Stefano Cattenach",
  "feed": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
  "id": 12,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 12,
  "date": "11-Sep-2018",
  "opponent": "Denver Broncos",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 30-16",
  "winloss": "10-1",
  "stats": {
    "pass": 230,
    "rush": 241,
    "rec": 189
  },
  "players": "Vickie Stienham",
  "feed": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "id": 13,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 13,
  "date": "24-Nov-2018",
  "opponent": "Miami Dolphins",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 29-27",
  "winloss": "7-0",
  "stats": {
    "pass": 367,
    "rush": 63,
    "rec": 170
  },
  "players": "Nalani Kennermann",
  "feed": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui."
}, {
  "id": 14,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 14,
  "date": "30-Nov-2018",
  "opponent": "Los Angeles Rams",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 33-13",
  "winloss": "12-3",
  "stats": {
    "pass": 218,
    "rush": 216,
    "rec": 144
  },
  "players": "Cece Kincaid",
  "feed": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "id": 15,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 15,
  "date": "15-Dec-2018",
  "opponent": "Atlanta Falcons",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 35-23",
  "winloss": "7-0",
  "stats": {
    "pass": 242,
    "rush": 269,
    "rec": 210
  },
  "players": "Marlene Blanckley",
  "feed": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "id": 16,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 16,
  "date": "08-Oct-2018",
  "opponent": "San Francisco 49ers",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 23-20",
  "winloss": "6-0",
  "stats": {
    "pass": 154,
    "rush": 150,
    "rec": 228
  },
  "players": "Gabbi Cheak",
  "feed": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
  "id": 17,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 17,
  "date": "26-Oct-2018",
  "opponent": "Detroit Lions",
  "opponentlogo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
  "result": "W 31-3",
  "winloss": "13-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Nessi Franke",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}]


const insertRamSchedule = function() {
  scheduledb.create(ramsSchedule)
    .then(() => db.disconnect());
};

insertRamSchedule();