const linksArray = [
    "https://lh3.googleusercontent.com/pw/AP1GczPRJTrwcI0OratOK9ci5AbwvVYh6zQ4ryr2jg2CztnDVgO3g3VclmpMbsZOId80dxWpKLsqOJEPtbbuzkQtqkPKY_d9P_7HWvgBHwOtqXFxuWU_floOFH0hgu0RcmpFjIKSn9AW4C1QwmX2iPOBD4tiTQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOg5fIuGp3F-Nt1HlXzb2-Ghc3KRYjTmI34NsP_GjieNUFHlrc-FF5c4vvH0uPHF7ccnjqk24YRe560TqKiwU9OUUCF2yfLea1cchvIjEN3n2P9gVSvamKAwyuDknOIKsXV6tTgRaH92bOqxLSrsyersA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczP1U72ECiWV8Tc41qmcAPZ0XwG2eIS1PLZEjBaFx3-cg9W6QZ642s-jz9CggAcn4-NPvpVMfDZLDBFzLpxwXp-11sgCTbrVsrIbVhvuANsAt9t-PsH7KQLem5qmxw2mbaMZePNrxg1DQURBV7dr7vv5KA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPYhdg5sYmacvCQPDwKHT9p86Bot9KJ1nthqYAcy_sCgiA2JzBtF0EM6a3BEOWECYKWIMp9ClL6quIWwxCjG5ueRLWzs6pa0LYzzU-6hav2SYbGLKZbW0_RjTzT5ANcyvpchNQ99YLXdK2aze-_vM46Yg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNWlaM_S1LQOwbTDmQuZAvK-BWYCKfLXcZShk5iltza6_JD5OMKkLT9hCcfhgSYOtzaWlx3c3g1-AAzS9lStXFb-b92N1sPMxtqVP68UCHsRHlmSx6XLIaYZzO6Euc-7mYFa-EgivrpLXudnt4CO48p7g=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMdDZTcpMJRmMg_f_2U_5m5uGNH86iJCHLJf8bEdL3dgJVWYqmvaD0Vd5KE2t3vqwLwq3mMyn1YqwZrhW_Fx5Waw3rZVISNu0n8xlns1aDMsWOa46iL-owNfdQhM3cnMDU8znoQsy3OhJ2iJ-TZI0OEpg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczN4bmjP3iJEQCY1rIYf5yGbUlFlV2QtE5HAQZeZ4yxgCJOLSS-mpz7eEvx_fGI7cnABz6YA3WANL0qtU-7S3OfYs01-dkY3wui3Bvi_t7gd6A67SrdKUpbH20C_AapspIxuPHjYViL8MOJlBrDT5sNFCQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczP6cmXqKv0ClAoJ5mA9uAU7Ng3R9g1G_18SXzZ5elHAjflrWG9PeVn0OiwFK_yZRC_OvGs5HadlgZBEj6uHczjhgEdJ9m9KvhEe2tfZFQx5p_Acks1mPvhMUe9GOc5vpvHCEpaUKPWV_IkQgmp57g_JjQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNkHA8S3Fu023BiR4T7TGcYY72ddM4Xf3FUuqxSxmqtcyXlj26hz69rVi54XUtt6Wi3cmullVb2R45bXvH3EgkaKAGrNLY_3YWaLZz4ArobRSneQIPXlG97z8k4S1mYr3fu-4MP5hXZY2zaHHyI76eDGQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczODeHIvERsecVrRu7oujRwZ3-EtD_WuS8bjGhq2Q_-opzxLVJnYESYWvqwaOZyEryCTB-vhhrC1XNP_CnEpiIJIvPNLqh6y-lXk-Ly5ICJ7mt_U25fEB7DETzuichDFhUc1gJWt3sqy3mwLkXrX8IGXcA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNWAO6UeJkKLmHej62UAMmCQXa0RcrPsfu7xvmKb79SvUd8WDc95kfr_IW_0WcMowA0JJErCTYG1KDbfn80WfRcqKO6xpI3qPhJ8_qf4ZbWVXq5YKXMhJQblDVDFGwYQmcNg2ssFdHheaw6d30R2tTU5g=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNmW3rg1Z9RtpZ1Kel_O2beQB7_DDx3tlByV_wG0_i-8SQYkpQgpDboI5MihBJev-aHYHCZOJWNoBS4YwBqRU5d3hntahms6mD82GjGmsUQqLHI_4J9FgtVJwq1-Stdrg_mXMo0QIc-X1PrbD8C3g6hiQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPCtqm0-JsWUhAscqcrtOxLlvXGNAokHmnSqDHZQ49XLRXDY4I0ayGtY1H4k3wuAvNl5KkBtSiE4iEvgnMT2t9OwTzgEYrctl5pcf_JxKj0PgCbgSMh80Y_tihDuuFMij3C10kOoDwS484jRd0-L5FvVQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOWql5MzO2iUD4H87F6CgPcQZmwSKNgfwhf7csn2yi1za_efYJwVhfrTpTD2P5zNTOKm-66xLtVfzSfxKIjt636d0sGU4B3FExEiq85Y6ghxNGOATwTg-68Vkd5FsVbMfNbaZWEyGOW_yQZWN9Nrh3P2Q=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMUyPZYfpN6Udj8ZAuwvDNGjAVVpQcZLh8DVSAL0eJgEoqVhrIDw4qTAg_vicoQ3b1SiiZmsyoviSQNAz6CrBUZd6G5DzL68A3e5ZjZJzkb_c66WHU3T53AXSdJlRnExjEHD7PLZO-8nTQOIH2l1VeCbg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMNqXm2LgnL2Mnsu8aIDjuv1LrbtKQfLuvVuKWHQJPwO5n3QT5SpAp7kDpa-ZLR3-bsRyQJrPW8LNWDiP-0QPDNGPVYYDxHLkPVS6wyjsvz-6V-GngHZyCjqzJ0f2Mofc0elP-kYUjwqwl_rs5CihN9PA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM5n4qQKK51o4H2-Z3vY0y9oKYBPgavOWKW2lmjTt1AIgI6hs68_OjZttQKEz_bYJYcOWZuIGNL0r_R8LbBMzZnacrnP0i6kpJu9jFJPM3X-7DjIthUleV3ygl2TtsJz13NlYtDAjQgTpidt6mgeAuxsw=w1600-h961-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPgeo9dUSPptF3kq6I8GFd-tWuXuBB4pV-mlsHkxHH5WddQerkK6nSURT-6WOzGpUG0TNBIwlMv0s0L-ZTcYhot6oUzu4myOw0-MSSlaGuWpjK3JM_6S_ytCTUV95vz8a6vFkLWmFCyhVyjUFHSYvEBlw=w1600-h985-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczORmsQO1HExh1T-Lm2q0Ok6C0v-FZSSc29UrNNzIJc3pE9SKZ6-p8IEvLBm7EaaybwV9Gzj2-HXH0_AaywSXXbVQ-g6I0nK3m9cxcnyuwoty2TVotueXry6O7nnZU-0wFMODLxd4tJAGnfq_7uAchpjgQ=w1600-h1158-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMlgrOcE-9CCiI8McyjOuPhD8m_Vl3YCwgE0vD8Y7fDEWlE1l0d-UyFdo8RDLJSjlh0iq_xg9FumKfYqHjoiEuQJzYtdksUGWkQvO9jjRlIFaGieK48UF2elky7FaYZbtNLmPKuLctKG7JjranlDrm22Q=w1600-h1168-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMadOnsIhJyqHgblHl24JRzyUHaeouN221JAxtFeNQS-1S-_prbUujxtQhTQ-_lfLOrwEKTPdhpKoUriKGQEA334XOu3q8aB41rhbcxYrdxwoyMoeNLLZBWuNGdOc-ct4GyvppMWf-EN74wHTAarn-ORg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM6rDKxbMGIGQWSjh1hNYkL9el2J2XY8hBxwWHI85-9ymu3rjVxLBjm-zqV4zn4vatG3bwJ89cvTAI1jrUMHL8THP1G1QrxVbTQd7u9T2jqbOktiizG2morSP0h1HZ2oUZ3viaUJp1GxYnuRhGk-fCBqA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMELx29bhaJHOkT2rco7hBY7oNzpbNCS6StMO1Tcax2JhvPnDnyO75wwBHj5juKvvDK7_I8t9N_sBiaHgryVsABg7wi17CrrimJ2fbedjg0pHg6MU7qbypFk4PcejbW1RF94P0RTLrVp5wwnyGEDJuwUA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNVyZ3oSIjWkHVxlHu3tAAlOPKwp0sPKfRnLGkG7d6B15u37EEGZdmcfZ7iDf72AE_0vIHThuX09VGSMX1B76Tn11iwh97Z_x1BTY9_qoEoLxkvVgQI2JM-PRsoKQZi-_5nFzbF_uvW__bJxN8YuYhuIA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPE0xHubSwU-m6663bAe5aF15frbJ8phrFDxm9lRCfqmtgfSbRgjio9D_oEpwYzB1ITAZaibY7O0USiNqwVNqD73H0G3yWdC_6fPhbOSshnw6MxvQNBkFgkD_8TKnwOtSlI2jU60FoYXj6hdvlvjA_Q1w=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOPdVsY2bKFvAAnI_bLv1oTRnGuX7G3gsvNAi2oUTDJpRWOwwaYgO6Ud01bugQV5o0O5cngObKaQAw3RNzawpA3HWW7XSf2qkNizz7NzQh9txBJqKbaslVWE2ktmSYtTtM1VLlvUlj9eK_clIZwh8026w=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM6c0nf1yV-xrsejBfbwFv_7xe7bGqCgcaQxiPw6njINJ0g2jpQdqXJHR-g1ie6rCIaH7V2I38fnAo50ZcsvD2XVi6GWIXc-cUVqcpw9GVBI7GplVw0vcwggxUP-ySwNjjGaa0m5t7R2O1hY7jyc62j4Q=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOiDjTTKxF7a1kxGE8y_Y3IEDECGcXoQXNkgCw0xgtiN5k3gGu6gIw31ZpDbzNwJzHs5AHcakPvz4Yt8lCPT48teZZtzIe8ZjLcR4eUZBBsVGv03g_6vgKviBFlT-PJmNRdwlpPaIQq5RFvcT9ENl3cag=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOr9EPAsfIZ3Rh1h-bPwX5LeoRpyI6ovtOFs7-T8KaHjGVjFrowoTB4lwwFF28u3F_UkRndL-3-ZQNgcsWH_R56Mdf10AaKDjnHVmMKuvTJm4g_ssNGUI4s_1kzdVzrC0A-xYMll8WYNVyPRVMldtgcRA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM76WMH_Kj4PEwErGPktcRC680peR0OW8mzY9o0itai5-CiVtdfhAyjGZfFT56DOqAqCFxUjOVA3EG8JiOzj5zT1wuBB1MJzNje9sFJ420y1la7z0QPyGsllzIA3inhegr04flqNXAzzrJoqsGutd0qAA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMMurGnbtnPmHfJiHtFxCf539aQ3XeiN43O8dh-GpiJR6a6tMwiIJNP3K5wZ29nMXE1_Wzg4eM4l-aS7DQGmZl6PxzqaKReUuPRJ9vVfBjg-00lYxydBokpWuAohpCMoOpp2ZRMnX1n27fUeSMksDYmVw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczO0WL_XzJLbEVy0_I3dT_bqedrUBMhLAmic7by4AT7iiqKQwNOQI_WJgdf1_BVCI-4uFlpAQ0bVmoNi4SJYmXxGC8iwObFu5J8vQtOCqI7KLsNkn_cHJFhKkNtn6Q0p06twi87iu2dXHAOD_L-Mr4VKbg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOET7u28_E__KF-WYEy56WI4YaEumWptLNQktiqXakGQHXPIY3WIwqbEO5_MQ7fjt5OGTkoKelGUf6i5Wt70OTaAmVnuFnXLsyzUJSEvWfTkzJn0FRvPAYOQTl1vhMAU64uDOKr8Aa1XnQfIACmXh5nJQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPMfb3srC2xlxim8vcFpJFRq20sA1gcjotZE-WZYIhjdLCSPDd7ZahnJ3w9dusHLxTuCu9Jxo4ilKHzwNCHaXjW8EL5D2zXO1aixzd_60NbhwEN1U3oqnaVTQtPWkLpISTqNxgPOjixMHZP_-xYDXBUpg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPkBPSdu8fag31CL9XSYNEy7P0koATphVVmVlX3zMElQP0YNemSBJzpliowObkW3HIqfN69Kft2p2kUPPSab5DNbMbk98Heq5KNp52VEiIu4n6ZedM2s0kZzUh7eUgQyRDSvO3vRkhe1mCtpkNMS3yWnA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczN9MNzJjdzDlB5dIRQWkfKFigCqu0yaLYteefq03CocZyFYK92lpS6r_QcovTFfCLD7JRBwy2awHWK1ZjSbLx5p5Q6hpoxGafpeM54QpgzhyXp6_gYsh2mstayeyWo9gP3eXKUca7CgZa0l593Yj15Yvw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMRY8eoIXcwSRP3oLQDy0fcJ2-uHjd5onDRkHLlsgNKhga422FWfxt1Y2IovvU9_gXy3famb-tQLYuOHE6IxsJSEmbICXgwqzG944wx2PNG-GivF0jhovE41ZKhAFOeskMzwjZ5pRvo-N8RtGzotC5f2Q=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMjsGlIxVWlxMW7m0q_nKKmBnOGewCeia_6UDIoad_XbFilr9Si7MEEEb_b9K_SA1r14zOR-afXGMGy60SMYLIvfV2R39MO5BNnryeHU_fCRkp6nThnG6WU30BpOMes2KL0mPHus86aMYULme3JNqtevA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPt4d7FOl6dMzXovxTVsoT95PIB_IMuDQXaOaA0XuaCzGOvyCKHCQBsTss5S1OE-wjVUUVLswLYNTPaXbs6lOJ9gn36r4Y1J4aA4MFUxRc6FS3WHniNTLJGj0mcKBPuUHyJYbouSANxxNXbz6z4ktWIBw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNK0LUfYAgaHIBAyZsvP4n3MCPR671llT-l7mznHb_g9_okv6u4xRonHO3-DZF_26gXO8CKYBdByKFW_CoN0DnXatZzupy-Mjn0u0vKn8dlUOuucP_rsXh1INtttmm8T8ImLNs_9W2ZReYczRVXlPOcNQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMcgRZBEfgtnCbsd5-OzNtKdWoxDVsXyTfKXcaJhnljhaIJU9xt4RNRUxnQr8lWEPXs7RQ3ygAtWWerFztXZBiZqVT9iGViHYXPCOeztXKC5Mduas7ZLm7YF1dUCZ-fJr8tbpAHU_54Xkkl0HxosUQ04A=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPS2JMFW9Rt3MqV1O5RUBHgWcFHbCfg8Hhy803IlpxCqfbYpynGE7e8yhfub-eHT4bR_oRzn12HiUUHI5OTDTKuIN7qAo9wXblNMwGykMLS8rMyURvIp8no7cBAwCAy8_Ufj11RgQhTOXH9T-ULeAZC5Q=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOkoe2K_4KGZaad9mlDDzqYioUDCuldywMiCw3ZLqc7uWfeFf9zIXbiPNfAQbkgUtWiDv6QWhLqCaMt8mcByMrlCuIQipg-wSpxeW5z_uSvWN5lyHN_5Xkwb8Y4_AzLnmwl1dDmTSLRARJIT4kscx2-ig=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPSwdmUB8pe9ZZBpPBSEf5q2rLctkZq_BpQmnukKgEzx_KZeXHTAQymjdEPwjj-uOqUdgnvRB4pOOvbbG0Z5RhBnduuG7_tWk0QC3Po6bGs7hk3yc1CbrFqGo9xIfCSanFcSxDfoyfS_mrth8zSFGvShw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMGRvFy5A3SgFN0IcXbswDaMahKSn85gWF4dQJFUt-z5gA6N0mzM5GXZW0hrv9QblDVon1VnDtxzp1VMcBkecLzlvQYD6TkebpudA2uEvNBr6tMcvj7LDCyKLBqSHVjg87fJ-MLZAp7sx16dTQoq5C1Aw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPKMYybWRe-B3S6eIYcRM9dSfnikeU4Ee96PV2ASGMtCgB4j6Mcw1d__exTWUYJJDCoFgsS18rijgIO4gbiFv8JGch4Ym2yUh2X14i5Klpz5k9AzHpRMycK3R_0RR2uSfdCYicM46y6x1KdMAyBy9TR0Q=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPzqrIKugHks3XwKraYB7vVx8pAIqrKNOqW1MR8YH37_huISJYMMrSHrT1fv7T6hTYUKWs5t3G2tuCng0_ilVguvAQzEkBtgfwiP5cQv2lUUpjPufe-PI6rmCrnnEEeDZQ4XmV8wBYmtPNjzYSNuOBodw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNz28gkZNBgI5Ksy3U5hHDIdzP4P9ssGIhgrOxskLdxpI-nCfclAvGiSPOvn59IMkVCwCPabjOAuIAUu8GcicpbZ6CH5PYBVdPTw2BI1DCzURM-XQTqCo-VHFKYjFve4rN6gtmFnOE461kHvZdenHlJ1g=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMuCHW9FfigysRYfYScdIqROt_223Hz7kD0eIf_LihHdifR1IfRytVqC7Gkc7KNtEsVvKWn7QJ1hDzw-gW5BgfW_JMneadn3hlsHHgEr_5qkhVSCszn-r9XkFdbm6IJoar8p_fgSJYOK5v07qHJz22_Hg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM8A8_RMu7w9CpO94fXXMRoBPuGSPy0FeqGrVf38TeMYO1aNrpMxThWzeW8lISpLvaJZ12zD8vHCXBwwvPCjkHqvHNvOk7h49vGRXx7Ew6GrElB1SdU4At_6ws_Y3zhOCyNU3rCTtYRFQR06_2uA5SZ_g=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMval7VnpSCRbV58nvgGxolxod6EefLvmpU4zBnS4VgzDzWu_VreuVPGZiCIU2D6kP0OPi77L1TQz99u8hdOpzq9awLefZSQtyAcAgO5gssp0grZvSnWvWEM1s5Pxbdf1hP7toSkRGRvL1uHaUQyZZ0eA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPrwPwNcK7Yl3VHQWj4Y9O1g9Pt4PDzhMHdJDaRLSkyKB25wB_k10aLOc1nsPpcQiZ0nk6eJMjRJGeuRfw1OcnPT1MgxkgPVXsU4LFj14xtLQsvqJAGw-HNsM-oR0cj5Ur5MEFHV4DHPXZK32s9MdqKpA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPZV8YSUJyWoKOXtE3znxiuD1XCUxCSphZteDItg75Yi3cBe586DaaQSnSCWTjspcXQvesoc-IxhAWksXq3PcQFjEsKoQ31BGC5GjlLg_tUvg3Oi3isDJG-Ba_sZjQzaWgVW1KhcX4QoqmnEehYh7HmQw=w1600-h1092-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNDz5KBd_X8pC77s9Ju-kOp_4KL0GmVcmvagCJIRLVrVYXAWGqj0Be4zvxVyo1-e_YyjP_ECS0FlNMNxqgKrVCNuxM6s7CCB5waHapGce5Tf-UmH1CsoTnq8TpANqkB_oPcblUEVuLpagj4l_FK2y1Xtw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMucaHz00n8ewKPvTv5UAqoI820BEQVAsGHNK4WQGTHlrMaEXCrR81Q2pB2GVMae3W20xxMdaGLNLZPJwqGQ3hfwmQYDnEElxXkOw9ZHBV8LmNr3Ae6Mhs8YwmT1JLl7EKCOC04AHQhSU8U-iY-ZaT4bg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNam-SXFbpLXpke3yP12lemMiVuX8308Env9JjJOFeIKGrEn1M67Igl-XvNrDLoHB9IgqzLrCpwCCSLkf5VbkQENv4fcjebkdFkatZ-OhbM1HI7YR3YJhYmB9Q4ONIwsj3Yl1w-VenhRqL_c2_SJJjyKA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOgIgsmW0euTAXRmSYW7kw82jwqFUM5ebGgKhvDHdeQjeM8Amv8mXHs4N056sBwh3KrWqIG2NDOZ3QuJjt6szeSgRtwDPmzuHmDdr1tpP3xOU9sZ2T8-HCeGn6JpLgbtx9IUvMi6Lj8CP6zZ7Rh1ZasPw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczO5IrkukUK711irZfpX88sLyGemAdtE27xJ2jMri5vh31SIUx_8bFozAG0w2sb0Pr3lNmDovpTSuNNFDWgggD3IdHHSUJTAgbRBaLBBJyihAIX6R_YWBl1sP3tg1O0WTRbPyozH2cA1OzyouonxzlZtVg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMmzG_T6bgqy2ifBKwxx8AIJ2ieef-Oyz2SFRAcw1qFosiscWNVFrJP3CFy_8SD6iYJ8H0mp3q7VHQO1XItgUtMkT0colglrt8aEpSbKKoazo8YfoS4HZM4h6tCP3H0ye6QfjChfKoZk2wZx1n_bKCBDQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNVxS-F28f9VoHAh0iHw4h0FrNnTmlo-1DGnP7eQb2rGByV5HQSjOeGaSMhmgq2WupWStHSWiUcTrb88jt74Y6JOc2Dgrqkz4_wmot5Tsd4PEUG_pzke3oDydCC3DYfoDTKZjXbjsJOd0c7jw1WWKrkSw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPNHQi6eYhMEilQTr3cJ_3WSg7pJyDbM_pFHU1j5BPxa77nRsBgY0QJAEAqxGp8Q9oP0Vhzkkuy6g6XhTjR69BFXRnKbF7jdFkmhGlsjzVUUTIgEAnWy2Rn6xGSuUVJd8Um9T-verHKHPzjVxCDwMwWiw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMvgJCTVDUEWnnk8oIxmYHmCukCNsGO62gTr_Edf_Gn5dII5d23LErcCTtKisOZkxpQZw67ebIwyIK0riaCpviHzFAHBYwFAqRLR-OQlxGvGYXZb_xR3HfrUSvAWphSYY7T4x601q9ggnz0gpmFCCnZfw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM37MsKLr1QeUbaazOy_TvVYpks4QCGDQ3ip0cW5hxatMalCF2Jpkc4J8Y153ytTjLGlgR96lypseGM8iTP1ylmimsxUuudWIxrWnAV-GO7E2dYcrGtf-9XCPiZaL5bk8zFpzeP-rj8nstKyKtiZQFRJA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMNHtnjvX5YPrdqDO-bNE37shiwXChA7xt1Y0WRZ9eT-hp2-LF87fCKCymEXWuqbGI4_hACJg5O4JcznBAyYXPSjQP9lwzI765sNCc2-7U6rMrQAqD5ircvyfVRwgP8hGt8iPrCPR3xUoeQfTjkLUoyRQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczO2sXC90LaAvG1bguEPNC6hIL3Wi439R-ZspjoIpVrLrsy8ZekaETTSNbyokaViu1vrvZoFWGRNX3ffjrzcpvUM45ahQFKnE-S1lkTpA2OXdLggLjFdu6mqzEhfb05ibvIAc2AEDRVi4VTWc2KEQWQ5EA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczM38USojBJX9G5EkNYKZWTY2YDQTMo7i_vzHTLa6_yvlFDKkS4TC5mnmZX3c3FB0sI5hFgcUE1zCYQLLSdqIP4HbtiTLBoi8SA_xmuo9avNk5xOD-HXZqezM33yaTKisUSoRVG3mBraRDyBjT2SRD67wQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPRYj_etWUh2cunsYp-SlEHjKrTLVLCyegokkkHdRVazcdzQeFzJiGjRylthLvcK0QgrwtqYohrRvDY_uGkGeufA48DdeXR0YpgbG2QnVmyZAQPoI5pOiOa_SdLsD3LV391NlLG8W-VtsYVYeIWfOWzmA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOGdMU3MxLRGMQc3U9b_iuaqgTWHl2Z4dM-UysEuM5aQTBOGnkRnAgHqNuAm3tsOyd7YVImaEKIzkPDybS9RxuX28kaVV0idQy38D08IdqlQaYPTkQlW6qOSDeKmj6ZVk06phktFp1lnaOZcQgHMbzesw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczO6R50qPb1AypVc1rWHwxx6mWRLlRzHRkx_nIoDoa8p6FxK9FVjheL4tA7eHQrlOzi2MJYY-7Rpjx9dgkdECwS4pTgVDSRmyyPjyQvmp-FEzLoapwSuRTOFf2lkk0VJt-uiBP_aVvUiQfwxWMXIqg_giQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMSQc6saqvJ9EEF8oG7Hqv6cLjEXvTc-8IEi8p0WlgYZQ2c7Y2pi_9sS8sctnpk4ZCjxpwa3M1a5h0JUleS1swIuKsNY99MyCtuAeviDb86kXdc_8kNNt6S71bzArsHBGd8ZSOdp9V25xqKNtHkUJh-LQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczODdA2B00ULidrlNGRizpNWS924Wx3qGYNF9yaqWEc8wZ_8rHP_Lc8bqM-aXdUqe_eDFUN1-kM1SwHa0bwin_liMMk7BdLkpIdLlp5w0qfVGFfBte4WyyzvsFoKPWq30_UhSTjEAivPOZVXWTispR_Eqw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczNygYDw7ViYrrMkjDqURXr-4T-GXKgEgzEU13VQzlAqNxbF9H3Q4M-2FZeAtAShDXt5b1eftntRwXd5EYS2aol81S1ZWTDWMGt-xB2CVTTF6HRQVBEyXDgrDEWW4p5XEETfJXcLw3kdFfvxsnPSR6dWBg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMYVvp2G0Ot4ftlmaJdWDZgPhyRZXR3TyCIZUhqsA4ii9VpPzLhpO2VMpIIDKJ25fnyxAJnb9X46o3aXmyrukqulRKZGeHetLhvJCCUtsmibXMY997FaAPyU6QXjk1KFBOYJkwtLuyPjInB-3zwFvcFjA=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMP5AyXJ3CglSrrEWXpzLTlqygUUzlUavkPGrDfVhqTf7ZrF1hvrcKkLorDu7b8BJTeYKrkwXcZY1Aw3nDa7l1Xu69PRFxM3HJcGFcVfT70FS0Ico4H5PfsC_SQ9QbA75IvvUTjLZsE7qU8oeYc08X24w=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOZBn4qZkynJVTqVrUvLgUA1WJt6r3nbIgOsHBbmo6T8fdv8f9NR5B0qhS5Y-1ZvoWGDQ8dRUMhaMUttN7dJkIXYrOpbn4uxIeX24agUS0qQnVDjs6DWZk-_4twWmLMGhB4PpKVh-DcsTMTYtD80TvRGw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOnafZuu0zySAXYmi4Jzj9Yqgs8HZE86oOv5TPscR24zYoaDIyzA91j9M1Yu2Y7jtkS7wzaT8cH7A6yoKP0s5BGDAbE_Q5V1C0lrMyuUJXnbnh0_UiVgbvaYkwFLSGDKscnvUUf2TFvIOst1xkz1mD8pQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczOa62kBnQFMrySvbGHgwX5pcxUOoPg_FN2Bk_d-BXysx2ELooOXgxeKRGFseBV7XeEi11Ub69yMD3999hD7Lrw-HOntTkd8d4yzkPq5Vv0a43dcO-zugLTruXKi-IsLOILbyosffOiL4ku0skie3BW-ng=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPQXJL9BJkC0xS7_nlOPdk9zjwhb7T8mwIWuipqV0ZjZGS4bFzZTwodOSwleIcn543xBAMtZRCk5TWoSg8299s8L4nmKlFN3H4ckqkEb7wFIRubjTWksifUaiCtF5suUCjJeBVHdenKPR56mCDLJjsHhQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczMVPbRG_utvHmz01ZPXxJw-G5MBTUue7G7_E1nS0NKzKpcaWgX9PsrakmYynH-9n7JT8OUuX3LjSaB1S4hV7Cad22rrg707nBNnfG2HW_zVj867mbil5qZ48oOfjEdIwW4L3cdCKqoI8juR_4Za6SLJsw=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPhz-3MmwyF-U7Wt6oWAlUFnCXZNUYj9QaVeSwxLYMb195t0g76lhud_Wg7lbL1ypBC0fcAo3zeOgb7aoVcag-p-3Qq4eH-nPSIbcUisE3ORuZEqesxbMqAB5_IRkLqBYhAjGUZRFYwvobvbR1Itv7yvg=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPp8x4q0PPAmIT8OkS8nUn_z4EUK7oSS8tI4CdChwOGMPgyqwUDlSwuSyNtijhOGssO99_eNE7VMPqtHToriLs9GWja0zrDaKaXvl2NekCeiDB_GjHD-xG_C9sCCOfe6spm4ohHeGRTGWYiuCuOb9dMWQ=w1600-h1073-s-no-gm?authuser=0",
  
    "https://lh3.googleusercontent.com/pw/AP1GczPVpaaQj6-2A4xV-SC7GOV9dHbfOXegMmwZ4X_Zw7eTWsAuk9AUAjOuPekfK8JdrrLakK1e57_-NYJ8GA26JmUtKSxR96_Wl2yz_bnsYsFtx0sUtlYqbclpeby5o0C3Dim7eTygd5a-T3mS1U7Zg6Bhvw=w1600-h1073-s-no-gm?authuser=0"
  ];
  
  let currentIndex = 0;
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  
  function displayImage(index){
    photoImage.src = linksArray[index];
  }
  
  
  function nextImage(){
    currentIndex = (currentIndex  + 1) % linksArray.length;
    displayImage(currentIndex);
   }
  
   
   function prevImage(){
     currentIndex = (currentIndex - 1 + linksArray.length) % linksArray.length;
     displayImage(currentIndex);
   }
   
   
   nextBtn.addEventListener("click", nextImage);
   prevBtn.addEventListener("click", prevImage);
   
   displayImage(currentIndex);
  
   setInterval(nextImage, 3000); // Change slide every 3 seconds
  
  
   nextBtn.addEventListener("mouseover", function(){
    nextBtn.style.transform="scale(.5)";
    nextBtn.style.transition="all .6s";
   })
   nextBtn.addEventListener("mouseout", function(){
    nextBtn.style.transform="scale(1)";
    nextBtn.style.transition="all .6s";
  
   })
   prevBtn.addEventListener("mouseover", function(){
    prevBtn.style.transform="scale(.5)";
    prevBtn.style.transition="all .6s";
   })
   prevBtn.addEventListener("mouseout", function(){
    prevBtn.style.transform="scale(1)";
    prevBtn.style.transition="all .6s";
  
   })
  