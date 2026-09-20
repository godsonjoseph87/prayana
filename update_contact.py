import os

def replace_in_file(filepath, old_text, new_text):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace(old_text, new_text)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

src = 'd:/Projects/prayana/src'

for root, dirs, files in os.walk(src):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            path = os.path.join(root, f)
            replace_in_file(path, '9876543210', '9061951128')
            replace_in_file(path, '98765 43210', '90619 51128')
            replace_in_file(path, 'booking@prayanatravels.com', 'prayanatravelplanners@gmail.com')
            replace_in_file(path, 'contact@prayanatravels.com', 'prayanatravelplanners@gmail.com')

print('Done')
