export const siteConfig = {
  name: 'Golf Club App',
  description: '',
};
export const formData = {
  genders: [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ],

  branch: [
    {
      label: 'Lagos State',
      items: [
        { name: 'Ikeja', value: 'ikeja' },
        { name: 'Ikorodu', value: 'ikorodu' },
        { name: 'Kosofe', value: 'kosofe' },
        { name: 'Lagos Island', value: 'lagos-island' },
      ],
    },
    {
      label: 'Ogun State',
      items: [
        { name: 'Ogun Waterside', value: 'ogun-waterside' },
        { name: 'Remo North', value: 'remo-north' },
        { name: 'Sagamu', value: 'sagamu' },
      ],
    },
  ],
  preferences: [
    'Access to Free Parking',
    'Access to Special Events & Tournaments',
    'Access to VIP Lounge',
    'Unlimited access to bar and restaurant',
  ],
  premiumServices: [
    'Personalized Golf carts',
    'Gold Plated Lockers',
    '2 pairs of Golf wears monthly',
    'Golf shoes spikes ',
    'Umbrella',
    'Golf Bags',
  ],
  golfDays: [
    'Weekdays 12-4pm',
    'Fridays-Sundays 12-4pm',
    'Fridays-Sundays 12-7pm',
    'Sundays only 12-7pm',
  ],
};
