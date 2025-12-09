#Extraer todas las lineas que contienen la palabra "chest" de un archivo txt y guardarlas en otro archivo txt.

def extraer_chests(nombre_archivo_entrada, nombre_archivo_salida):
    with open(nombre_archivo_entrada, 'r', encoding='utf-8') as archivo_entrada:
        lineas = archivo_entrada.readlines()

    chests = [linea for linea in lineas if 'chest' in linea.lower()]

    with open(nombre_archivo_salida, 'w', encoding='utf-8') as archivo_salida:
        archivo_salida.writelines(chests)

if __name__ == "__main__":
    archivo_entrada = 'loot_tables.txt'
    archivo_salida = 'chests.txt'
    extraer_chests(archivo_entrada, archivo_salida)