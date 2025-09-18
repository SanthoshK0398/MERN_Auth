import ayushya_homam from '../assets/services/ayushya_homam.png';
import danvantri_homam from '../assets/services/danvantri_homam.png';
import grahapravesham from '../assets/services/grahapravesham.jpg';
import ganapathy_homam from '../assets/services/ganapathi.png';
import navagraha_homam from '../assets/services/navagraha.png';
import sudarshana_homam from '../assets/services/sudarshana_homam.png';
import vedha_parayanam from '../assets/services/vedha_parayanam.png';
import varalakshmi_varadham from '../assets/services/Varalakshmi.png';
import navaratri_pooja from '../assets/services/navarathiri.png';
import rutu_puniyahavachanam from '../assets/services/rutu_punyahavachanam.png';
import sathya_narayana_pooja from '../assets/services/sathya_narayana_pooja.png';

const servicesList = [
    {
      slug: "ganapathy-homam",
      service_name: "Ganapathy Homam",
      service_image: ganapathy_homam, // Replace with actual image path
      benefits: [
        {
          heading: "Removal of Obstacles:",
          body: "Lord Ganesha is the primary deity invoked to clear hurdles and challenges in personal, professional, and spiritual life, ensuring a smooth path to success."
        },
        {
          heading: "Auspicious Beginnings:",
          body: "Highly recommended before starting any new venture, project, business, housewarming, or marriage to ensure a trouble-free and divinely guided start."
        },
        {
          heading: "Success and Prosperity:",
          body: "By invoking blessings and removing impediments, this homam is believed to attract financial growth, business success, and overall prosperity."
        },
        {
          heading: "Enhancement of Wisdom and Knowledge:",
          body: "As the deity of intellect, Lord Ganesha's blessings enhance clarity of thought, improve memory, boost problem-solving skills, and foster intellectual growth."
        },
        {
          heading: "Protection from Negative Energies:",
          body: "The sacred fire and mantra chanting purify the environment, acting as a shield against evil energies and negative influences."
        },
        {
          heading: "Promotes Peace and Harmony:",
          body: "Helps resolve disputes, improve relationships, and create a peaceful atmosphere in the home or workplace, contributing to mental calmness."
        },
        {
          heading: "Spiritual Growth:",
          body: "Deepens spiritual connection, calms the mind, enhances focus, and contributes to inner clarity and spiritual awareness."
        },
        {
          heading: "Alleviates Malefic Effects:",
          body: "Considered a powerful remedy for individuals experiencing negative astrological influences, particularly those related to Ketu."
        }
      ]
    },
    {
      slug: "grahapravesham",
      service_name: "Grahapravesham",
      service_image: grahapravesham, // Replace with actual image path
      benefits: [
        {
          heading: "Auspicious Entry & Positive Energy:",
          body: "Performs purification rituals to cleanse the new home of negative energies, inviting positive vibrations, peace, and prosperity for the residents."
        },
        {
          heading: "Blessings for Residents:",
          body: "Invokes divine blessings for happiness, good health, and success for all family members residing in the new house."
        },
        {
          heading: "Protection & Harmony:",
          body: "Acts as a protective shield against any evil eyes or negative influences, ensuring harmony and well-being within the household."
        },
        {
          heading: "Vastu Dosha Mitigation:",
          body: "Helps to mitigate any Vastu doshas (architectural imperfections) present in the structure, balancing energies within the living space."
        }
      ]
    },
    {
      slug: "navagraha-homam",
      service_name: "Navagraha Homam",
      service_image: navagraha_homam, // Replace with actual image path
      benefits: [
        {
          heading: "Mitigation of Planetary Malefic Effects:",
          body: "The primary purpose is to appease the nine planets and reduce or neutralize the negative influences (doshas) they may cast on an individual's life as per their horoscope."
        },
        {
          heading: "Attraction of Positive Energies:",
          body: "By harmonizing planetary positions, this homam helps to attract favorable outcomes, good fortune, and positive vibrations into one's life."
        },
        {
          heading: "Overall Well-being and Prosperity:",
          body: "Aims to improve health, wealth, career prospects, relationships, and overall happiness by balancing cosmic energies."
        },
        {
          heading: "Removes Obstacles & Delays:",
          body: "Helps in overcoming hurdles, delays, and misfortunes caused by unfavorable planetary transits or birth chart alignments."
        }
      ]
    },
    {
      slug: "sudarshana-homam",
      service_name: "Sudarshana Homam",
      service_image: sudarshana_homam, // Replace with actual image path
      benefits: [
        {
          heading: "Protection from Adversaries and Evil Eye:",
          body: "Invokes Lord Sudarshana (the divine discus of Vishnu) for powerful protection against enemies, negative forces, and the evil eye."
        },
        {
          heading: "Removes Obstacles and Delays:",
          body: "Helps to swiftly overcome obstacles, legal disputes, and delays in various undertakings, ensuring quick resolutions."
        },
        {
          heading: "Healing and Health Improvement:",
          body: "Believed to alleviate chronic diseases, physical ailments, and promotes overall good health and vitality."
        },
        {
          heading: "Prosperity and Spiritual Growth:",
          body: "Attracts wealth, success, and helps in cleansing of sins, leading to spiritual upliftment and inner peace."
        }
      ]
    },
    {
      slug: "rutu-punyahavachanam",
      service_name: "Rutu Punyahavachanam",
      service_image: rutu_puniyahavachanam, // Replace with actual image path
      benefits: [
        {
          heading: "Purification and Sanctification:",
          body: "A purification ceremony performed after significant events like childbirth or a menstrual cycle (Rutu Shanti) to cleanse the environment and individuals involved."
        },
        {
          heading: "Removes Impurities (Sutak / Patak):",
          body: "Aims to purify the house and family members from ritual impurities (Sutak after birth, Patak after death) and restore sanctity."
        },
        {
          heading: "Blessings for Well-being:",
          body: "Invokes divine blessings for the health and well-being of the new mother and child, or for general prosperity of the household."
        },
        {
          heading: "Restoration of Auspiciousness:",
          body: "After a period of ritual impurity, this homam restores the auspiciousness of the home, allowing regular pujas and ceremonies to resume."
        }
      ]
    },
    {
      slug: "ayushya-homam",
      service_name: "Ayushya Homam",
      service_image: ayushya_homam, // Replace with actual image path
      benefits: [
        {
          heading: "Longevity and Good Health:",
          body: "Primarily performed to invoke blessings for a long, healthy, and prosperous life, especially for newborns on their first birthday or for individuals seeking recovery from illness."
        },
        {
          heading: "Protection from Illnesses and Accidents:",
          body: "Helps to ward off diseases, improve vitality, and protect individuals from untimely death or accidents."
        },
        {
          heading: "Removes Negative Karmic Influences:",
          body: "Believed to mitigate the effects of past karmas that may cause health issues or shorten lifespan."
        },
        {
          heading: "Enhances Positive Energy:",
          body: "Fills the environment with positive vibrations, contributing to the overall well-being and happiness of the family."
        }
      ]
    },
    {
      slug: "danvantri-homam",
      service_name: "Danvantri Homam",
      service_image: danvantri_homam, // Replace with actual image path
      benefits: [
        {
          heading: "Healing and Recovery:",
          body: "Dedicated to Lord Dhanvantri, the divine physician, this homam is performed for rapid recovery from illnesses, chronic diseases, and for overall physical and mental well-being."
        },
        {
          heading: "Boosts Immunity:",
          body: "Believed to strengthen the immune system and enhance the body's natural healing capabilities."
        },
        {
          heading: "Removes Health Obstacles:",
          body: "Helps in overcoming obstacles related to health, ensuring smooth medical treatments and operations."
        },
        {
          heading: "Longevity and Vitality:",
          body: "Promotes a long, healthy life filled with energy and vitality by invoking the blessings of the God of medicine."
        }
      ]
    },
    {
      slug: "sathya-narayana-pooja",
      service_name: "Sathya Narayana Pooja",
      service_image: sathya_narayana_pooja, // Replace with actual image path
      benefits: [
        {
          heading: "Fulfillment of Desires and Wishes:",
          body: "Widely performed to seek blessings for the fulfillment of legitimate desires, success in ventures, and overall well-being."
        },
        {
          heading: "Removes Obstacles and Sorrows:",
          body: "A powerful ritual to overcome difficulties, solve problems, and alleviate sorrow, bringing peace and happiness into one's life."
        },
        {
          heading: "Prosperity and Wealth:",
          body: "Invokes Lord Vishnu's blessings for material prosperity, financial stability, and abundance in the household."
        },
        {
          heading: "Strengthens Family Bonds:",
          body: "Often performed with family, it promotes harmony, understanding, and strengthens relationships among family members."
        },
        {
          heading: "Spiritual Merits:",
          body: "Performing this puja with devotion accrues immense spiritual merits, leading to a virtuous and fulfilling life."
        }
      ]
    },
    {
      slug: "vedha-parayanam",
      service_name: "Vedha Parayanam",
      service_image: vedha_parayanam, // Replace with actual image path
      benefits: [
        {
          heading: "Spiritual Upliftment and Knowledge:",
          body: "Chanting or listening to Vedic hymns purifies the mind, enhances spiritual understanding, and fosters a deeper connection with ancient wisdom."
        },
        {
          heading: "Positive Vibrations and Purity:",
          body: "The powerful vibrations generated by Vedic chants create a sacred and pure atmosphere, removing negativity from the surroundings."
        },
        {
          heading: "Mental Clarity and Peace:",
          body: "Regular exposure to Vedic recitations can calm the mind, improve focus, and bring profound inner peace and tranquility."
        },
        {
          heading: "Blessings for Prosperity and Well-being:",
          body: "Invokes divine blessings for overall prosperity, good health, harmony, and success in all endeavors."
        }
      ]
    },
    {
      slug: "varalakshmi-varadham",
      service_name: "Varalakshmi Varadham",
      service_image: varalakshmi_varadham, // Replace with actual image path
      benefits: [
        {
          heading: "Attraction of Wealth and Prosperity:",
          body: "Dedicated to Goddess Varalakshmi (a form of Lakshmi), this vratam is performed to invite wealth, financial stability, and abundance into the home."
        },
        {
          heading: "Blessings for Family Well-being:",
          body: "Seek blessings for the health, happiness, and longevity of family members, especially husbands and children."
        },
        {
          heading: "Fulfillment of Desires:",
          body: "It is believed that sincere observance of this vratam leads to the fulfillment of legitimate desires and wishes."
        },
        {
          heading: "Harmony and Auspiciousness:",
          body: "Creates a highly auspicious and harmonious atmosphere in the household, promoting peace and positive relationships."
        }
      ]
    },
    {
      slug: "navaratri-pooja",
      service_name: "Navaratri Pooja",
      service_image: navaratri_pooja, // Replace with actual image path
      benefits: [
        {
          heading: "Empowerment and Protection:",
          body: "Celebrates the divine feminine power (Shakti) and invokes Goddess Durga's blessings for strength, courage, and protection from all evils."
        },
        {
          heading: "Purification and Spiritual Growth:",
          body: "The nine nights are dedicated to spiritual practices, fasting, and meditation, leading to purification of mind and soul, and significant spiritual progress."
        },
        {
          heading: "Destruction of Negativity:",
          body: "Helps in overcoming negative traits, inner demons (like anger, ego, greed), and external obstacles, fostering positive transformation."
        },
        {
          heading: "Prosperity and Well-being:",
          body: "Invokes blessings for health, wealth, happiness, and overall prosperity for the individual and their family."
        }
      ]
    }
  ];
  
  export default servicesList;