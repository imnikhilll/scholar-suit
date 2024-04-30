const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "data:image/jpeg;base64,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",
    set: (v) =>
      v === ""
        ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgXFxcYGBcXGRgYGhgYFxcXFxgYHyggGB4lHRcYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBBAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAIDBQYBB//EADsQAAEDAgMGBAUCBgEEAwAAAAEAAhEDBCExQQUSUWFxgQYikaETMsHR8LHhFCNCUmLxshUWM0Nyc4L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMBBAUG/8QAMREAAgIBBAEDAwQCAQQDAAAAAAECAxEEEiExQQUTUSIyYRRxkaGB0UIVI7HBYuHx/9oADAMBAAIRAxEAPwD7MuYcEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgCqvcsZG+4NkwJMSeSSdkYfc0howlL7VkTvNs0qbt0kkxOGOGi5NR6hTQ8S/o6KtJZYty6Kh4ho/wCQ5Fql/wBX02M5f8D/AKC74Kn+JqWgJ9Ak/wCs0Z6Y/wD027GR622gys0/Dd5oy1HZdtWqrvi/bZzTonU1vXByjdsXLTPxJzzgg9oXz0NVreZJvj5wew9PpXhfJpWniR0AvaHcYwI+h9lan1uaeLY5/K4IW+mrP0P+TbsdpU6olrhP9pwI7L2qNZTcvpfPx5POt01lT+pf6G11EAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgDkfGgLXse4nccws6GZ9/ovC9Yqm3GS6Pb9KxKMorvs5Wjc7jpaZkY/VeROLnH6j2VSnHDQ4y+nguZ1YFdOCW812JE9DKPqQm1ouoNAILam4eX6ELY3WQeY9kprKxKOSd4wwRiRBAPI55aqtessxtbzn5ErhByUsYaM5tZzCC5rgDrGB6pXBS6Z27Yz6Y+2syJnHgAoYkmczhLOMDtttx7Mnkjgcf1XbVrtVUsRl/PJzz0Fc/GDStPFAJh7cOIz9DmvSo9akuLo/5X+jjt9LaWYM27S/p1PlcCeGvpmvZo1dN32S/wBnnWUWV/chldBEEACABAAgAQAIAEACABAAgAQAIAEACAFLvalGkSHvAIzGJI6hoMKFuppqeJySfwWross5jFsRqeJrcGA4u5gYe5BXLP1XTx6y/wBl/s6I+nXtdYJN8Q0zoexafaVzL12jOHGS/wAf/YP0+1F1xtmmKbntcHECQ2d0nliJ9l2P1Gh1uUJJ/gktJZuUWsfk5mt4te4kA/DGEQAe0nsvIs9U1LT24X/o9ePpUY98lf8A3FWLXN+ICP7oa0gTxAUpep6lxx/eORl6dSnnH+PAs+/qASKlQ8t930K5Fqb3xvf8l1pqm8bV/BB+1qlRjqbyXMcI82bSNWkiexXZHWz2uE3uX9h+jrrmpw4a/s5v4zcjgeOISbX2j1lF9onsyr/Maanmp7wDxru6kEcM+yrFV7luXAmpT9tqHEvB3V14PY4b1CpgcROI5Q5v7rus9LjLmuX88nz1fq84/TdH+DB2lsi4t2l9QeQRLg4EY4DnnyXBb6fZWstLH4PSo1tF8tke/wAoz/8ArAaILj6Ex9lx/pm+cHX+myxqltQPbughwP5lopPTuDySencXkz7q7FNwgnouiFe9cnTCDlHklS2qTwngQslpsA9OkMs2k0jzCOEY/wClJ0PwyTokvtGaNzq10xwOKTa4vPRKdSaw0dV4f29vEU6hMn5Sc+jj9V7/AKf6hKcvas/wzwtboPbW+PR0i9s8oEACABAAgAQAIAEACABAAgAQB494AkkAcTgsbS7NSb6IVakNJBbMGJIiYkTyyQ5JIEss+W1Wv+Z0knzE44k4klfGTsc5tt8n2VSgoqMeiArnKB6JdhXagbVIzE8EOKYrgmRdekf1exK1VL4N9rPgqfdNPD85J1W0Mq2il1WMvsnUR0s9kDtAD5suOKb2G+h/az0NMvcMCCpOrnlEnVzyJXu67zZHjx6q1bcePBWvdHgUtrzdMf6KrOvKyUnXuRr7O2lUpnepOLOIaT7tMg90sbbKvtbRx36Wuz71k6qy8TUrik+3uyGbzSPiZA9Rk1wz4GNMl6tGtjbFwt7+fk8O/wBPsomrKOeevg+dX1MU6jmCoHhpgPb8rhmCPzOVyThteE8n0+nsdkFJxafwwbTkCM5j8Kk5Y7Hy0+S2pY1SJA3owxOPaUitguGL7sE8FD2upnzNTpxn0yicZrgkLkcws2MzYM290QpyrTElFeTd2fdbxDp3Y5ZRqVxyTreY9nBfWtri1k+i7G2h8Zpn5mwDGRnIhfT+n6t6mrc+GuGfJ6mj2Z48Po0F3HOCABAAgAQAIAEACABAAgAQBw/irZ9wHPquO/SkkRJ3G6Yaduq8HX6a9yc28r/x/g9/06/T4UMYl+fLOVNzvZvIjASdNIXnSUnhPk9tUqL4SPf47ewnvlKT2ccm+zjwV1bvQlMqxlWLOunZ5hUVaKKCKxcgwMueafY1yNsa5F7h4GTgVSMcjR/KK23DuEj9EzrQziiq6cHCfz0TQTjwEU0V0rKoRvMBI4iU8pwTxIHZHpjlGjcOwLT1Ij/ajKVK5yI51rySOyKpxMT2+6z9TBC/qILouo7NqhpLyMASDOOHRJK6uTSiZK6DeEU3FzvMMpow2y4HUMMot6jXYO/fsqSi48oeSa5Q3b2gGT45EfUKUrM9olKx+UaNs97NJHFv11XPOMZfghLZIjUoCo0h5icRxB7ojPY/pNUtjyhStskhstIceH1VY6hN4ZWOoy8NFDqBYQHCCVTdu5Q6mpdGpZOGQmDC5bM9nPYuMs6Sw2hVa4mg1x3RjDS5pHBwCNE9RVLfWm/leDyNTTVKOLGk/B37CSASIMCRw5L7BdHzbPUGAgAQAIAEACABAAgD53tPxRXdUdBLGBxADTGAMAkjE5dF87qtbdKTjGWF+D6XTem0qtN8tryWUPFNZrXAPkkYF+JbpI498MElXqN9cWpc/D+P9mWel1uSfS/HkVq+KLgD/wAs8obH/FKtbqX/AMv6RaPpdDf2/wDk5e6uJJMDEknus5fLPXqqUI7Uyj406eibaUcWSeHRvAArFtzhmKSzgXq3D+QHL9VSMIjJLJFzncQQmSiMmhbfT4GLKLxMHVZJPGULJfBottG1G7rcDph9Vzu1weWQ3yg8sttnGh/KfLdZ0xSzSu+uIssWfUiytfu+Vpx5nDLlnKWNCXMkKq49sqo3NQf+RuHEDT1TSrg/tY0oxx9LIV6xeCAYGOOYJ4YhNCCi+TUlHsy6we0Q4YLpW1vKLqSfRQKsaDuFTajS2hduGZKSVaYbR6jtUDMx0UJadvonKtM0ad8Hag/queVLiRdbXRL4h0g8sis2oxpeRO4qOqO6YTJOHdWiowRSMVFDtu4NEDM+yhNN8k5Zk8nZ+GvEIpsbSc2GCcQDMkkknjmu7Sep+0lXNcfK/wDZ4Gu9Oc5OyL5+DtGkESMQcivoE88nhHqDAQAIAEACABAAgAQBwPia5td4ii0b2bntMNknERkdcRrxXz+uemcnsX1fK6PodBDUpJyf0/DOcc9p+UEn2XnJNdnsJSXYpUqCfMAB3CqovwWUXjgrNSnwB7hNiQbZfJBwpxg108Z+yZOfk3M88spt7vcMThljl3Tyr3Iede5GgyszDyjocR24LncZ/JBwn8kKls04tAHQwtjOS7BTkuzMurOMYK6oWZOiFmTKrAhdUeSuS+y2k4PGUa81OyiLiJJKXB09vtcOG4YM/wBLo9uK82WmlF7l/Rxyow8oTrbKa5xdT8p4HLtwVY6hpYnyVja1xLkpbcPYYe0gdiE7hGS+lj7YyXA/TbTfkQJ1acO4UZOceyT3RL3WDyP6XjkcVNXR/YmrY/sxG42cz+2D3H7FXjfL5KxsZlV7MNXTGzJ0RnkLixApl5BB0lbC3M9pm/LwIUeqtIpg0aVy6InuudwjnIjihllq4iQ/THI4qbnHyifuLPQxStntG98wiZU5Ti+BXZFvA5bVzhmFGcEJKEWdl4T204PbRe7yGQN7QxIg6Y6c16HpmqmrFTJ/T4/DPA9T0cdrtgufJ2i988EEACABAAgAQAIA8ewEEESCII4g5hHZqeD5l4v2VTtXDcqOO8MaZElrZwJPCcMccNcV4Or0ldbW19+D6f0zV2aj6Zx68mJbuEYFuPMrgmueT1Jp55LHtE4taTxIB9ylTkYsnrrgDQD2Qotm7GUPuASJbIygDNUUGl2bs44YjcbLnGYzPQc1aF+OCsbvBnbr2ZOI/T0K6Mxn2i3DLGX7x8wB9ildMX0K4Ik3aJ6dysdKQuxM8uqzHNxAB4/dbCLT4NjFryZdwwDEFdMW/JrIsuXxuzI54xz5JnFdk3FN5HLO6rDJ2HPEKNkK32h9qfZqsuXOHmIA5fuuR1xi/pF2qPRCjbGm/fA3hy56ppT3x29A5KSwxlt+QSd0gaY4+im6YtYyL7afBKltpvB47D7pXpX+DHQOsvpG8DhzHueSi6WuCTrxwZu1K1SrAA8smMsTx/VdVMY1/uVrjGHnkyzZPid08F0+5H5Lbl8lLPiAxumeh+iZ7GuxlLgao3TmnIjiMlKVaYOMZGtb37d2OcwRMLllS85OadXORwVqhgg4chh7KLjFcEtsUdB4fsvjVGNndjzFxkyGkEho46Y5c8lf0/T+7qFzjHP8HleoXuqt488H0VfUHzQIAEACABAAgAQAIA+aeP7KpTuDWgmnV3ROjSGhu6TplPOTGRXj67Tyc9/g+l9JvrlX7XUl/ZxbiJMYZwuRJ45PfWcciz6xyJPqqqPlD4Ltkv8A5zCTLRJPpgfWEly/7bx2Jb9mEb97Vw3mS+PVcFcecS4OWEWniXBjXNxUjCk6ecx+i7YVwT5kdMVFdNGYxzif5kjsulpJfSPlroZvaVMbvwyYjzSRM9EkHL/kSpnY21NfsRbQBGZWObRVtj1K0p5fNOjsv2Uvdkmc9m6XyjMqWDySGsiDlnrgOa6FbFLLZTK28lFbZ9UOkjM8miT6AKkboS6YRaS4Ivlox9Rj2RhMopZPaF0Qde6yUEzcryaLLh7f6T7rndcX5McYvssdteMwfYpf0+emI60enarCMvYIWnkmCr/JUazHYiARqMPUJtslwxkmSobW3MCMD3WS0+7lCyrTZp2t5TdgCBOgOPoVzTqnHlolKD7NJrWHGS08guduS4wRe5cHlW3ok7zhvO4wAEKduMLoE7MYXQrtENIDqdMAt+aIx7BVpclxJjVZTxN9nlpciBA9Cssr5Gsr8nQeHdrhlUPbiPldkfLMkYHPDXgm0909JYpY46f7Hl6zTq6vbn8n0kHhkvrOPB8uCABAAgAQAIAEAZ239pC3oPqEgGIbOrjgOuJBUb7fbg358FqKvcsUfHn9j5TtC9qVD53EzmSZOOcL53dKT3SeT7CmmqtfRgVds9jvlMR/dqlV0o9l1bKPYpW2YOB6yCrRvZRW5F22bqRD2vmMxEdlT3YzW1oZS3cFjNslrpIJGvEdOKV6ZSXASqyjat75rgYcHTz+i45Uyi+Uc7r5KH1G5QCnSkim2XYvVtKbsfqqRsmmapyXDM2vRh2BjoumM8rkrBJIrZfObIdE9M+4TumMuga5HaW1CW5GDhhn91CVGGJ7UWyYvZwJnkR91nts32l4F69wz+pgx6hPGMvDNUX8mZcRpH5xXTHPkZl9G6LYgyRl9kkq0wwmsE3te/HdB5QlTjHjJvCWCp9CqRHwyByaUynDvIu5EzZw2SYPBZ7mWbn4KTR1T7jT1tILHJjDdvSg5qUpGSfBo/BGeGUY4nqOCg5NEd3OB62jDFwnUGFzzbIzi2OULVjCJdI6KM5yn4JSlKSH9n2pqHyPY0ExLnNBaOhO87DEADFdFOldrSlJL55OLUX+0nui2/wuD6VbUg1jWtJIa0NBJkkAQCTrkvqkkkkuj5aTbbbLFpgIAEACAIUagc0OGRSwkpLcjWsPDOe2v4up0iWsbvkEgkndbIzAwJK8671OEZbYrP8ASPR0/pllqy+EcPtTaT65L6zscgBgGjOGj8yXlX3zunuf/wCHv6bSRoilH/IlXty5ohhjQ6qUZpPlnTDbF9iL6NVs/Oeoy9VdSrl3gtui2IPuawPmBI6QVdV1vofEfBXUujGo5FMq0mOooSqVgVZRZuUUPI0VFkVtD1nV3BhjPooWR3AiwbQg+be3f8Yn3SqlMyWcfT2QqXIf8jXR/kQT7AJtij2bDc1z/RC1bLvMJHArZvC4NY8xzhiGSOQ0UWk+2K8fI4yiHEH1BEfhUHLblE3LaiNa2E7sJo2PGRoy4yJX7d2AcjjOXqFet7stDxaJWoYMSG90s9/SNkvg1bZwBmBhpouSabWCM4vGMj1W8yIKgqiMaiXxQ7BzQR0lYk10zNrXTFqthQOMR0P0VVdauMjKyxBT2dbzJGXUrHfdjCB22kNs0KApOLSQ4CWmAMdAePBPpp2uaT6MrnbuWTn7a5OuK7pwXg72jWtq06Fcs44ISWB1jHOzMdiotxiTclE0aFEtZBAk8cFzSknI55yUpGpsralSgfK4FpzYZIw4cCr0ay2n7Xx8eDh1Gkru8YfyfQLasHsa8ZOAI7r6umz3IKfyfNThsk4/BYqCAgAQBnUg6nTgOENBgbvDHjHsvGr1coQ2xSwjqcVOR8zuHh0uOIcS4gYEE4mOWK8fLcs+T6mtbUorxwZNeucmuB7Y95XTGC7Z1xXyLu2q5oyE9/0VFp4tj+zHsXrbYqkYgRpmPqqR00E+AVUfAtb3FR7w2QAc+ipKEIxbNfCGbugN4N4k+wUq5PDY0ZcCtayM44cFWNvBuUxKvQc0w5pA0KvGSa4YvZdZUxvaxr0SWS+nJo7c0RlkeeUcyowlk1MVp1fhugwRxGKo47lkN2TVp39MDe3x9ekZrmdU28YEayaVrWDxIiCJnD0MLlsi4vDIyjgn/Esnd8pPXHj6rNk8Z8GbZfJF9Gm+JJDhkZx/dapTj+wJzj0IXGyviSd4E6YwfRdENRt4wU9xLtGdc7Ee0fKfUFdEdTFvsopwZXbmpT17HFNPZMolkqrbSqZb3oAmjTDvBPpllttmo04mRwIH0Sz00H4McUzSbtaR8mPXBc36fHk32ik3FV+Zj/44fun2Vx6Q6hFELm3cRiC6NZOHNNCyKFys9ldOxeMQFrtj0x98esjTmPbicMsteqnmMuBU4scfdvbuy3dkYHQ9FFVxlnDyTUIyzgcp329Ag5KDpwTlXt5NrYtZjKjXVGbzeeMc44qcZKM/q6ODVxnODjB4Z9LpuBAIyIwjgvsK5RlFOPR8lJNPkknMBAAgBMxC+dwjr6PlHi0UqNdzKW8GjPUA6gchx6qcYJ8I+l0d07K82GJdBwiTMif2VIYfg74vjgznUi54AkTn9VdSSjko3wXloc8NPCB0yCTLSyHS4I0aLg8OjASfTMJpSTjgHhmwKjXtEiRociOXNcbjKMuCW1xfAfAkRMjngR0WbsM3dgqNnGh9R906tN9woZRDTvSOEDRUctywPu3cDxYx4EQCNdD14LnzKDJfVAXfsVshxZzwxaesK0dU+kzHYnwZd7ZHeLi6SSSYAAx4AZLphdngtX1goFZzBDSQZkkE4/bsnwpcs1x5KratuuDiTnjn6ppRysCy64NFu2v8O8x3yXO9KvkEvkYftIt0n09lNUJjbEQftfD5HeuH1WrTfLF9tIRuLxzh8v1VoVRj5HXHQu63c7RV3pG7WTbYOSu6JmEXBhpifYpM72PlYNHZ97TO7JAPA5dJXPbTNZwRkm0dBbhhMkbs8MvRcEnJI5JbksHt9bfKZ5YZfssrnwzap9ntK3bGJB/OaxzlngJTlngo2vRmjhiGkEdMo91TTy/7n7m1SxPLFNn0C/KBjGJjPrpzV5rnA198a/uybjtn16cB1M44jX3Clbp5rtM5I6iizmMjt/CVWoaO7UGR8s57vA95XueluftbZeOj571CNatzD/Jtr0jgBAAgDH2ncblN7hmAY65BeBtO1I+P+KKsamT5iTjzW0wW89rTTez9im22hTrt0DhjunAjUjmOanZTOp5XR6NVia4Gw5kg5RxMjoFF7sFcSwQuLOmfM2QfX0xWwsmuGbGUvJAxjjnnhnxTcs3Lz0ZldrRPmOfTHoumO5+Ciz2ypl09ny+hn9E7hGXYPk9bf1uIPUD6LHVV8GbWFO8qH5mA+36LXXBdMxqQuLqpOBLen5in2QDk0rPaz8n6ajA9xkVz2aeHcQ9tMuq7Q38N2ew+iRVbfI0a8clFS0c7QBOrEht6RS/ZpIzIcO4I5c+6p76J+eyj+DLdfZN7iZRFrXDIlI0+0MaNvSZrI6KEpSJty8F7LVkyXA8o/VLvk+BHOXWD2pVY0ZNHPD6rFGTYKMvLFjdgjAiOA1T+20PsMnaFxvERGWi6qobVya+OEKsMdFV8mR4NjZ104YNfA4Zj0OS5Lq0+Wh5Ri1nBtMvntE7o6gke2K4pUxkc/txZW3aBP9PvK10peSntJGg9pqNaMQSoJqDbObKi2yDLIsdGvJa7dyNdikjpNm7cqUi1joezDyvxgf4nQ+y6dN6hKpYlyjxdVoVPM4cM7ixuWVGhzIg9j3X0GnvrtWYHh2Vyg8SGFcmCABAGLtClvMc3iF4R2pnyPxZamCP7THbip6ezE8M9ypR9vMTintieRXqoyM+DY2DU+JVa1zjujE45gaLj1K2VuSXJ213SawjobyiXDdptwnRedXNJ5m+S0JY5kxG6ty0bo3p11x+ivCalyysJN8syHMAPMFdafAzHrN28SNR7qNixya5Ejc0gSCB9PZZssxkORk/DI8uHQg9oU1vT5EeV2K3dA0yA6m4E4gOaRPPHNXWfJsZxmvpYga8Ox9FTZlD7sGpbsbn+hXNPd0Db8DpuWNEEjlJ+ij7cpEtrbI1L9vwqlRr2y0tG5IDnSYJAzgSqQ07ykybeLFDGc+fgxKu136gRwxXVHTx+S3XgXo1HOdIAPJO4pLBu7ySfVeMJhYoxMxnorqXVQ5uPrH6J1CPwKng9p0t5Y3tKJZHBZmMOih7iyM8FhsxyHqj3RclbrQuwbjzjBb7iXZvXZB9Agga8tEyllDDVPabqcB0kHhn6ZFS9hT5ROaRo2+0qRyIB4RHsVzzomvAmG+EP0L9uGLZXPOp46EdRpMu2EguInsD3XM65LhEHXJdDJrNIGAw1GfspqLTJbWjU8KVyK4AJDS0yNM49Qu/0+bhcn/J5/qEU6/yd0vqz58EACAMm4Xi4Ow4rxPsvelzR1HFQsqcXuR6Olv2/TI+X7V2eWOkjAZiP16Luou3rBeyG15XRXTuvhvDwWkjhOI4QmlXvW06I2qPJ0/h/a7aoJb5XDBzTjnkei8rV6Z198o6IWxtX7GgRiXEDqFz+MIt4wiqsabs2g9QmjvXTNSkj1tKnHygR7ocpZ7NzLJlXlJgqTA4SuuuU9mC0c4/JmbVezJuBldNKl5Ek3jkSFU6mY4lXayTSSLqDN+Spye0tFJjFpb095zqriGMaXQ3N5kBrBwkuz0AK2LysIlqHKKW1ct4EX1JJIEA5CZjlJzTYGTfkCzUBGTcPI7So7wUXLDLNEP4ZzTgD9VqmpC7S+iC8bmvPRZnAjSjyUV7aCRIMcEykMueR2jWoBjd5oDgM8ZPooyjbKT2vgVpp9jTLylGDgAeJg+6k6p/Bv7kv45gHztI1GB9OKX2pN9GPHkjS2zSOBaR2z9Cmlpp/Iu3Pkm7adPRvo37pVRPyzVB/JjXQL3b0dl2QajHA2CLaCN5uBqlXLT5suP7KcoKS+kN3ya9jdN0g/nBcllb8k5xz0bFtXbwjpguScHns5pQlk6nwowOqSJwbqOJAz7FV0MG7jyfUHiPJ2y+sPABAAgDOrBeUdZj31AlMkPFnGbc2W1xMjqY/VSlppJ7q+/g76dVtWJdHIVthhkgtlpywmOh1Cx3yzzwzo2xkvpFrSiaG9ukzxHDQFNZP3cZOvSxUUT/6nW0f2gfZJ7FfwdKbyM2txUe0nGRyCnZXCMki8JZXJR/F1Dk5P7cF4GR462qE+ZxxHD7ZrVOC6Rj/AHFn7PGYcO8j9VVWv4J7T2lajXHosdjGUcltsC12ASz5XI8V4NNlkyqCBg7gcuy5XbKt/gWUnHvozbnZbmaFdML1IFh9BQq7oIgd1rWWa4l+zLZ7yYGA1UrpxiuRnYork0C6DukA8QVDHkXGeUem3puxxHuEKckY3LzyFTZ4IwLeslHvPPJim12JP2TJzGGKstRg1yj5My8oEGIPX7LprllGTa8Craaq5CJF9HmO6nL8DI0rWi12TvquebaG3DxtXwIc0qSsXlE90fJFto8/MGwh2LwMpxQptEswbvfLn1MSrUqWM/Im55EIJMMz48FbCXMicrG+InWeF9kV6xADvKPme7EDpxPJcsq1bLEUQu1VdEOXln1bZNs2i0NaJjU5k6ldNMFS/pPnL7JXNuRpfxA1kLuWph54Ob25HorN4rf1NfyZ7cg+KpPV88I32yhzVAqKV6MoWTTEvrCZV45HUjmb6wImPuO4VnXC1YkikbJReUc/e2gGJG7/AJAbw7jMe65Z6CcVmDz+Dsq12OJIzHWmG8AHDi0z6jTuuaW6PEuD1KtVCaPLSuabsQd3mp2QU48dnVGafBrfwVNw3m/McY07Ll92cXhjb2nyMi3IAhpHuCp+4n5JbuRF2zGb285pk54GVdaiWMRZTchyjYtDSQBhx/M1GVrcuTJWPODBvhDjGGK7qnlHQuslNrtds7pMHjoe+ieemeMoj79bltZuW20MIdiPVcUqcdGyp8xIV7Gk/wCXA8k0bZx75FUpR7PLe1qUZ3SCOcLZSjb2hnKElhmde1yJJd6K9cEym5JGO6+qb280unrh9l2KqGMNHI7ZN8I0aW2nRDmieOi5paWOcxKqfyMUL3VTlUWzlDVeoyoAHOjlE6JIRlDonhrwUilSBxy7BM5TfQYaFr8tJimMNSqVJr7hW3jkyazhSdmRqM/ouyKc0cllsa3yxuhtgx84PXBRlpV8DR1MZeR59xUqDyBwGp0PQ6KKhXB5kUc8rgLLw8+o6A0uPAfUp/fcuII55zhFZm+DsLLwcabQSA46U2mPU/nVNLS2NbpfwcE9fFvbDhfJ1GwG1jg+k2kxogNEZ9lsIz6ccI4r3DtPLOloHCEzWDlZcGAhZGCkY3giynB6o9lo1yyTIRsfwYEJsARLFpovWoLdwGNfWJOQTRmx00YN1sUmZXVCb8hk52+8OebeaSx3EfULp2xkuTN2OhJ9KtTwcwPHGJPtiuO302uXK4/Y6a9bZDyUt2pSByI4x9lwWemT8Sz+52w9TflGlabSbHlfHUH6Lhs9Nuz9v9nQtfVLsvuL98aOjhH1hTjoJrtNFYaijwzE2jtepl8Jw6xHtMq9eliu5HTXZHwc9dvqumcjwH4V31quPRk5WMhb2JcMW4A5/nVNK3D7EVaa5Q1Y0XtcA0kN4ae6lZKMlz2WrzHro0a1dzNJjHDBc0a1LyXdixk8pXbqmAae5la6lF9iKaxnBk7SrbueJ4DRddMMnNfeonltBbP4ETTTNhNSWUPutg4CI/NVz73F8nQlkso7OM4iO6Wdywak0NjY8/1ADmpfqfwI5pDLdmUgPM9o95SO6b6RP3kXUq7A0tawvPGMEntzlLOcE5WrOciVTw1UrkEsLQMtM+q9Gh2L7Fk5tTqapfczSsfBtNpxgnkN73K6P098/ulg4XrK4/ZH+TprLw3TESD3M/sr1+m1f8uTns110vODoKFqxghoAHJdcaYQWIrBxynKTyywPGCVwTMwP03CEvtC5JF6x0Jm5ZYyuVkakjGeurrWlnAFfxyqKCZg4vLKHkrMgeFqNrAi+kqLhAL1LcJoyAzbnZwOi6I2MMmTc7KIMgK8bWHZjX/h9jzJYCemPqqxaYMUf4Y/scRyIkfdVcIsTc0e0tl1mZsDhxH7qMqfgpGwhcWhOhb2w9FzTpi+0dEZtdMoZsym75mD0j9FD9NEstTYumB2MBi0D3+6lPSJlVrLPksbsVuufL91F6P/AORRa+fwV1NkMGZSvSyX/Ida6XwTGxWxAMA8vqFn6aXyb+vfwZ9bwnSknGTzP1VlGxeSb1CbzgnS8H0yNUyhZLyL+qx4NKl4SptMNc7DSRxicuKJaVyfLFXqM0hz/t+kM5P/AOgJmczGCxaKK7EevsfRIbCYDgOxJmJj9VVaOCJvWTfkvZs+m3/1tOUHdB1PHoVSOlgvBN6icvI66hwHL8jurqhfBL3G3yTtLYmo5rsgAfVVUMPASaxk0BbgZBPtwJkupMWitlzmrGKj2hRCXBrZdGCBT1qACUssI1EZUo95NZF5VTBp9wIzXH+nbGyetuE0dPjsGwN2n9lGEH3XJHsxAj8c8EyqiZk8NUqigkYJ3DyVu0ZFXw+KeKNKX01RAQNNaaU1KMrGjUxZ9gDok2Jj7yh+z+BPqldQ28g6xd/cUntM3ciD7F34AldTN3om21eP9LPaYbkVvs3n/SPZN3onY0qnnx+V27kMoB+q32mmZJocZau4lOq2I3EsFqRqU3tmZROna45/ma1QFbQwKUJ1AUnSpyU+DGyVq3+bU7D2WSRrf0jD24rBSym1YKyVQpWwROmUrZoOWIwk1MB48pJGo9LcFkUDZEpzCspBiQWgBQwAI8GElqMILQKXoGI6pkaRfmqIwhC008hAEHJkBAhYzURcFiNPTkgwk0INADFajBXZv/t/+w/8WofY0vBooE8laRmnoQjGSanAnZ5rGYzy1+ep1SyNfSLXZrDCymsZh7UzSMETYlAKi0ACDAOaxjIufkE0RSpaaf/Z"
        : v,
  },
  price: Number,
  category: String,
  flavor: String,
  reviews : [
    {
      type : Schema.Types.ObjectId,
      ref : "Review"
    }
  ],
  owner : {
    type : Schema.Types.ObjectId, 
    ref : "User",
  }

});

listingSchema.post("findOneAndDelete" , async (listing) => {
  if(listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});
  }
 
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;