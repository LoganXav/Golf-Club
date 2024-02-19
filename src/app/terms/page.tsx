import { Header } from '@/components/headers';
import { Card } from '@/components/ui/card';
import { Paper } from '@/components/ui/paper';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `

**CLUB MANAGEMENT**

As the operator of the Club, Management retains the right to decide all issues regarding operation and management of the Club including, but not limited to, the booking of tee times and reservation of slots.  

**Membership Agreement, Rules, and Regulations**

1.The term “Members” shall apply to a person, a business entity, or the representative of a business entity to whom any form of membership or use rights in the Club shall have been issued by the Club. The membership is purchased to enable the member to enjoy the privileges of the Club facilities:

*Full use of the course    
*No green fees except kitty and tournament days

2.The comfort and convenience of all Members will best be served by strict observance of all the Club Rules & Regulations. Members are requested to report any violation of Rules & Regulations. Members and their guests violating the same may be escorted from the Club, and Members are subject to suspension and/or termination from the Club according to the terms of the Club Rules & Regulations.

3.Good order, proper attire, and decorum are recommended to be observed at all times on the premises of the Club and use of Club Facilities. 
4.Members are responsible for the manner, deportment, and appearance of their children and guests on the Club premises.

5.The Club is not an insurer of the property of Members or guests. Insurance of Member and guest property is the responsibility of each Member. The Club will not be responsible for the loss or damage to any property, regardless of where the property is checked, kept, left, or stored on the premises of the Club.

6.Members shall pay for any loss or damage to the Club property for which they or their guests are responsible. Club property shall not be loaned to any Member, guest, or any other person for use off the premises for any reason whatsoever unless prior written approval is obtained from Management.

7.Parents are responsible for the conduct of their children on premises at all times and shall be responsible for and pay for all property damage caused by their children while on the premises.

8.Pets are not allowed on the premises except on Sundays, on the grounds that they do not bypass boundaries.

9.The Club shall have the right and power to prohibit any games, sports, or other activities which it may, in its judgment, consider prejudicial to the general public, the club membership, or Golf Club.

10.Each Member is required to carry his/her membership card at all times while using the Club Facilities and exhibit the membership card upon request.

11.Club management may adopt new rules, delete rules, or amend the Rules & Regulations at any time in its sole and absolute discretion.

12.No Member may resign or request a refund of a portion of their paid membership fees, except for reasons acceptable to  Golf Club management, which shall be at management’s sole and absolute discretion.

13.Golf Club membership fees are vary from the free plan of $0  to premium plan of $25 monthly.

14.Club membership is strictly “at will” and may be terminated at any time, with cause by either the Member or Golf Club.

15.Profanity, club throwing, and emotional behavior will not be acceptable under any circumstances.

16.All persons entering the golf course must first be registered and booked in advance. This is required of all persons regardless of member type or guest status.

17.All members have a responsibility to support the rules of golf and to assist in their observance by other members and guests. We request that violations be reported to clubhouse staff or management.

18.Each player is required to have their own set of golf clubs, and no two players will play out of the same set of clubs or bag.

19.The golf course may not be used for the purpose other than playing golf. Jogging, running, walking, fishing, driving, or riding bicycles on Zuma Rock Golf Club property is not allowed at any time. Parents shall be responsible for educating their children about the rules of behavior on the course.

(where applicable) For insurance and safety reasons, only persons holding a valid driver’s license are permitted to operate golf carts at any time. No more than two (2) persons (including children) will be permitted to ride on or in a golf cart at one time, and no more than two (2) golf bags shall be carried on a golf cart at one time.

20.No alcoholic beverages are allowed on the course. All food and beverage must be purchased from the Club. No beverage coolers are permitted on the course unless provided by the Club.

21.Course personnel have the authority to remove any violators of these rules.

22.No Member shall reprimand or in any way abuse an employee of the Club but shall report all instances of misconduct or other complaints to the Manager on duty. Employees are not permitted to leave their stations, and Members are requested not to send employees on errands without consulting the appropriate supervisor.

**QUESTIONS**  
One of the following questions that gives a YES answer may suspend your booking temporarily:  
1.Can I ask which symptoms have been experienced in the past 7 or 14 days? Fever, Sore Throat, Loss of Taste, Difficulty in Breathing, etc.   
2.Do you have any medical condition that may affect your playing?    
3.Did you travel/have a long journey in the past 7 or 14 days?

**Fees (are subject to change):**

a) Membership Fee: $25(Premium members),  
b)Development Levy: $5(All members),   
c)Green Fees: $5 - Week Days & $2 Weekends  
d)Maintenance Fee per round: $5for registered members only  
e) Guest Fee per pax: $10 (non-player)

`;
function page() {
  return (
    <section className="flex flex-col gap-12 ">
      <Header
        tabs="single"
        title=" Terms and Conditions"
        category="Your one stop registration portal"
        src="/book.svg"
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
      />
      <Card className="p-6 md:px-12">
        <ReactMarkdown className="  space-y-8">{markdownContent}</ReactMarkdown>
      </Card>
    </section>
  );
}

export default page;
