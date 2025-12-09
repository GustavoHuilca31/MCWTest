#rename archive files that contain spaces and () in their names
import os
import re

def rename_archives(directory):
    # Define a regex pattern to match spaces and parentheses
    pattern = re.compile(r'[ \(\)]')

    for filename in os.listdir(directory):
        if pattern.search(filename):
            # Create a new filename by replacing spaces and parentheses with underscores
            new_filename = pattern.sub('_', filename)
            # Construct full file paths
            old_file = os.path.join(directory, filename)
            new_file = os.path.join(directory, new_filename)
            # Rename the file
            os.rename(old_file, new_file)
            print(f'Renamed: "{filename}" to "{new_filename}"')

# Example usage
if __name__ == "__main__":
    target_directory = "./"  # Specify your target directory here
    rename_archives(target_directory)