import os

search_root = r'C:\Users\SURFACE\Desktop'
target = 'root_check.txt'

print(f"Searching for {target} in {search_root}...")

for root, dirs, files in os.walk(search_root):
    if target in files:
        full_path = os.path.join(root, target)
        print(f"FOUND: {full_path}")
        # Also list other files in the same public directory
        print("Sibling files:", os.listdir(root))
