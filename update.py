import os
import re

def replace_in_file(filepath, old_text, new_text):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace(old_text, new_text)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def regex_replace_in_file(filepath, pattern, new_text):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(pattern, new_text, content)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

src = 'd:/Projects/prayana/src'

# 1. WhatsApp footers
for f in ['pages/VehicleDetailPage.tsx', 'pages/ContactPage.tsx', 'pages/BookingPage.tsx']:
    replace_in_file(os.path.join(src, f), 'Generated from:\\n', 'Just Prayana\\n')
    replace_in_file(os.path.join(src, f), 'Generated from:\n', 'Just Prayana\n')

# 2. Kochi to Kannur
for root, dirs, files in os.walk(src):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            path = os.path.join(root, f)
            replace_in_file(path, 'Kochi', 'Kannur')
            replace_in_file(path, 'kochi', 'kannur')

# 3. Fuel Efficient & Outstation Hill Station Excursions in fleetData.ts
fleet_path = os.path.join(src, 'data/fleetData.ts')
regex_replace_in_file(fleet_path, r'fuel-efficient,?\s*(and\s*)?', '')
regex_replace_in_file(fleet_path, r'Outstation Hill Station Excursions', 'Outstation & Hill Station Excursions')

# Fix the interface for acType
replace_in_file(fleet_path, "acType: 'Full AC' | 'AC' | 'Non-AC Available'", "acType: string")

# Replace all acType with AC/NON-AC first
regex_replace_in_file(fleet_path, r"acType: '(AC|Non-AC Available|Full AC)'", "acType: 'AC/NON-AC'")

# Restore Full AC for Volvo and Urbania
# g-1 is Urbania, g-13 is Volvo, but let's just do it directly via ID block or just regex on their blocks.
# Actually, I'll just change all of them back dynamically.
with open(fleet_path, 'r', encoding='utf-8') as f:
    content = f.read()

# For Urbania and Volvo, replace their AC/NON-AC back to Full AC
# Urbania
content = re.sub(r"(title: 'Force Urbania[^}]+)acType: 'AC/NON-AC'", r"\1acType: 'Full AC'", content, flags=re.DOTALL)
# Volvo
content = re.sub(r"(title: 'Volvo[^}]+)acType: 'AC/NON-AC'", r"\1acType: 'Full AC'", content, flags=re.DOTALL)

with open(fleet_path, 'w', encoding='utf-8') as f:
    f.write(content)

# 4. TRUST_METRICS in reviewsData.ts
reviews_path = os.path.join(src, 'data/reviewsData.ts')
regex_replace_in_file(reviews_path, r"\{\s*value:\s*'10\+',\s*label:\s*'Years of Excellence'.*?\},?\s*", "")
regex_replace_in_file(reviews_path, r"value:\s*'15,000\+'", "value: '7000+'")
regex_replace_in_file(reviews_path, r"value:\s*'50,000\+'", "value: '3000+'")

print('Done')
